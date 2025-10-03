"use server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Workspace } from "@prisma/client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getUserDeatils = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) return null;

  return session.user;
};

export const generateworkspaceIfNotExist = async () => {
  const userDeatails = await getUserDeatils();

  if (!userDeatails) {
    return redirect("/signup");
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
      return redirect("/signup");
    }

    const createnewWorkspace = await prisma.workspace.create({
      data: {
        name: data.name as string,
        description: data.description,
        ownerId: data.ownerId as string,
        members: {
          create: {
            userId: data.ownerId as string,
            role: "ADMIN",
          },
        },
      },
      include: {
        members: true,
      },
    });

    return createnewWorkspace;
  } catch (error) {
    throw new Error("Error while creating new space");
  }
};

export const getWorkspaceDeatils = async (id: string) => {
  const userDeatails = await getUserDeatils();
  if (!userDeatails) {
    return redirect("/signup");
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
