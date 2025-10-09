"use server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { workspacewithmember } from "@/lib/store/workspace.store";
import { Collection, Requests, REST_METHOD, Workspace } from "@prisma/client";
import { headers } from "next/headers";
import axios, { AxiosRequestConfig } from "axios";

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
        saved: values.saved,
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

export const sendrequest = async (req: {
  method: string;
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: any;
}) => {
  let start;
  try {
    const requests: AxiosRequestConfig = {
      method: req.method,
      url: req.url,
      headers: req.headers,
      params: req.params,
      data: req.body,
      validateStatus: () => true,
    };

    start = performance.now();
    const res = await axios(requests);
    const end = performance.now();
    console.log(res, "res in the data ");
    const duration = end - start;
    const size =
      res.headers["content-length"] ||
      new TextEncoder().encode(JSON.stringify(res.data)).length;

    console.log(res.data, "dataa in the send requ ");

    return {
      status: res.status,
      statusText: res.statusText,
      headers: Object.fromEntries(Object.entries(res.headers)),
      data: res.data,
      duration: Math.round(duration),
      size,
    };
  } catch (error: any) {
    console.log("errrrrrorrrr haaappppend in the send req", error);
    return {
      error: error.message,
      duration: 0,
    };
  }
};

export const runRequest = async (value: Requests) => {
  console.log(value, "valuess in the run request");
  try {

    const headers =
      typeof value.headers === "string"
        ? JSON.parse(value.headers || "{}")
        : value.headers || {};

    const params =
      typeof value.parameters === "string"
        ? JSON.parse(value.parameters || "{}")
        : value.parameters || {};

    const requestConfig = {
      method: value.method,
      url: value.url,
      headers,
      params,
      body: value.body || undefined,
    };

    const send = await sendrequest(requestConfig);
    const requestRun = await prisma.requestrun.create({
      data: {
        requestid: value.id,
        status: send.status || 0,
        statusText: send.statusText || (send.error ? "Error" : null),
        headers: send.headers || "",
        body: send.data
          ? typeof send.data === "string"
            ? send.data
            : JSON.stringify(send.data)
          : null,
        durationMs: send.duration || 0,
      },
    }); 

    let requestdata:Requests | null=null;

    if (send.data && !send.error) {
    requestdata=  await prisma.requests.update({
        where: { id: value.id },
        data: {
          response: send.data,
          updatedAt: new Date(),
        },
      });
    }

    return {
      success: true,
      requestRun,
      requestdata,
    };
  } catch (error: any) {
    console.log("wrror in run req ", error);
    try {
      const failedRun = await prisma.requestrun.create({
        data: {
          requestid: value.id,
          status: 0,
          statusText: "Failed",
          headers: "",
          body: error.message,
          durationMs: 0,
        },
      });

      return {
        success: false,
        error: error.message,
        requestRun: failedRun,
      };
    } catch (dbError) {
      return {
        success: false,
        error: `Request failed: ${error.message}. DB save failed: ${(dbError as Error).message}`,
      };
    }
  }
};
