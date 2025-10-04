import { Collection, Workspace } from "@prisma/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { WorkspaceMember } from "@prisma/client";

export type workspacewithmember = Workspace & {
  members: WorkspaceMember[] | [];
};

export type workspacecwithCollection = workspacewithmember & {
  collection: Collection[] | [];
};

type workspacetype = {
  workspaces: workspacecwithCollection[];
  openedWorkspace: Workspace | null;
  setOpenwokrspace: (data: Workspace) => void;
  setworkspace: (data: workspacecwithCollection[]) => void;
  addworkspace: (data: workspacecwithCollection) => void;
  deleteworkspace: (data: Workspace) => void;
  updateworkspace: (workspaceid: string, values: Partial<Workspace>) => void;
  addCollcetion: (
    workspaceid: string,
    collectionId: string,
    data: Collection
  ) => void;
  updateCollection: (
    workspaceid: string,
    collectionId: string,
    data: Collection
  ) => void;
  setCollection: (workspaceid: string, collection: Collection[]) => void;
  deleteCollection: (workspaceid: string, collecitonid: string) => void;
};

export const useWorkspace = create<workspacetype>()(
  devtools((set) => ({
    workspaces: [],
    openedWorkspace: null,

    setOpenwokrspace(data) {
      set(() => ({
        openedWorkspace: data,
      }));
    },

    setworkspace: (data) => {
      set(() => ({
        workspaces: [...data],
      }));
    },
    addworkspace: (workspace) => {
      set((state) => ({
        workspaces: [workspace, ...state.workspaces].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        ),
      }));
    },

    addCollcetion: (workspaceid, data) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceid
            ? {
                ...w,
                collection: { ...w.collection, data },
              }
            : w
        ),
      }));
    },
    setCollection: (workspaceid, data) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceid
            ? {
                ...w,
                collection: data.sort(
                  (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
                ),
              }
            : w
        ),
      }));
    },

    updateCollection: (workspaceid, collectionid, data) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceid
            ? {
                ...w,
                collection: w.collection.map((c) =>
                  c.id === collectionid
                    ? {
                        ...data,
                      }
                    : c
                ),
              }
            : w
        ),
      }));
    },
    deleteCollection: (workspaceid: string, collectionid: string) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceid
            ? {
                ...w,
                collection: w.collection.filter((c) => c.id != collectionid),
              }
            : w
        ),
      }));
    },
  }))
);
