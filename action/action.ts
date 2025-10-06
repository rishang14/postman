"use server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { workspacewithmember } from "@/lib/store/workspace.store";
import { Collection, Requests, REST_METHOD, Workspace } from "@prisma/client";
import { headers } from "next/headers";
import { da } from "zod/v4/locales";

export const getUserDeatils = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) return null;

  return session.user;
};

export const generateworkspaceIfNotExist = async (): Promise<
  workspacewithmember[] | []
> => {
  const userDeatails = await getUserDeatils();

  if (!userDeatails) {
    return [];
  }
  const workspace = await prisma.workspace.findMany({
    where: {
      OR: [
        { ownerId: userDeatails.id },
        { members: { some: { userId: userDeatails.id } } },
      ],
    },
    include: {
      members: true,
    },
  });

  if (workspace.length > 0) {
    return workspace;
  }

  const defaultworkspace = await prisma.workspace.create({
    data: {
      name: "Default Workspace",
      ownerId: userDeatails.id,
      description: "Default workspace for the user",
      members: {
        create: {
          userId: userDeatails.id,
          role: "ADMIN",
        },
      },
    },
    include: {
      members: true,
    },
  });
  return [defaultworkspace];
};

export const createWorkspace = async (data: Partial<Workspace>) => {
  try {
    const userDeatails = await getUserDeatils();
    if (!userDeatails) {
      return;
    }

    const createnewWorkspace = await prisma.workspace.create({
      data: {
        name: data.name as string,
        description: data.description,
        ownerId: userDeatails.id as string,
        members: {
          create: {
            userId: userDeatails.id,
            role: "ADMIN",
          },
        },
      },
      include: {
        members: true,
      },
    });

    return createnewWorkspace as workspacewithmember;
  } catch (error) {
    throw new Error("Error while creating new space");
  }
};

export const getWorkspaceDeatils = async (id: string) => {
  const userDeatails = await getUserDeatils();
  if (!userDeatails) {
    return;
  }

  try {
    const workspaceDetails = await prisma.workspace.findFirst({
      where: {
        id: id,
      },
      include: {
        members: true,
      },
    });

    return workspaceDetails;
  } catch (error) {
    throw new Error("Something went wrong while fetching the details ");
  }
};

export const createCollection = async (
  workspaceId: string,
  collectionname: string
) => {
  try {
    const createdCollection = await prisma.collection.create({
      data: {
        name: collectionname,
        workspace: {
          connect: {
            id: workspaceId,
          },
        },
      },
    });

    return createdCollection;
  } catch (error) {
    console.log("error while creating the collection");
    throw new Error("Error while creating the collection");
  }
};

export const getCollections = async (workspaceId: string) => {
  const collection = await prisma.collection.findMany({
    where: {
      workspaceId,
    },
  });
  return collection;
};

export const deleteCollcetion = async (collectionId: string) => {
  return await prisma.collection.delete({
    where: {
      id: collectionId,
    },
  });
};

export const updateCollection = async (values: Partial<Collection>) => {
  return prisma.collection.update({
    where: {
      id: values.id as string,
    },
    data: {
      ...values,
    },
  });
};

export const getAllrequest = async (collectionId: string) => {
  return prisma.requests.findMany({
    where: {
      collectionId,
    },
  });
};

export const createRequest = async (values: Partial<Requests>) => {
  try {
    const createdRequest = await prisma.requests.create({
      data: {
        collectionId: values.collectionId as string,
        name: values.name as string,
        method: values.method as REST_METHOD,
        url: values.url as string,
      },
    });

    return createdRequest;
  } catch (error) {
    console.log(error, "error while creating the request");
    throw new Error("Something went wrong while creating the request");
  }
};

export const updateRequest = async (values: Partial<Requests>) => {
  try {
    const updatedReq = await prisma.requests.update({
      where: {
        id: values.id as string,
      },
      data: {
        name: values.name,
        method: values.method,
        url: values.url,
        saved: values.saved,
        collectionId: values.collectionId,
        parameters: values.parameters ?? undefined,
        headers: values.headers ?? undefined,
        body: values.body ?? undefined,
        response: values.response ?? undefined,
      },
    });

    return updatedReq;
  } catch (error) {
    throw new Error("Error while updating the request");
  }
};

export const removeReq = async (reqid: string) => {
  return prisma.requests.delete({
    where: {
      id: reqid,
    },
  });
};
