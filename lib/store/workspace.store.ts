import { Collection, Requests, Workspace } from "@prisma/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { WorkspaceMember } from "@prisma/client";

export type workspacewithmember = Workspace & {
  members: WorkspaceMember[] | [];
};
export type collectionwithrequest = Collection & {
  request: Requests[] | [];
};

export type workspacecwithCollection = workspacewithmember & {
  collection: collectionwithrequest[] | [];
};

type workspacetype = {
  workspaces: workspacecwithCollection[];
  openedWorkspace: Workspace | null;
  openedCollection: Collection | null;
  setOpenwokrspace: (data: Workspace) => void;
  setOpendcollection: (data: Collection) => void;
  setworkspace: (data: workspacecwithCollection[]) => void;
  addworkspace: (data: workspacecwithCollection) => void;
  deleteworkspace: (data: Workspace) => void;
  updateworkspace: (workspaceid: string, values: Partial<Workspace>) => void;
  addCollcetion: (workspaceid: string, data: Collection) => void;
  updateCollection: (
    workspaceid: string,
    collectionId: string,
    data: collectionwithrequest
  ) => void;
  setCollection: (workspaceid: string, collection: Collection[]) => void;
  deleteCollection: (workspaceid: string, collecitonid: string) => void;
  setRequests: (
    workspaceid: string,
    collectionid: string,
    data: Requests[]
  ) => void;
  addRequests: (
    workspaceid: string,
    collectionid: string,
    data: Requests
  ) => void;
  deleteRequest: (
    workspaceid: string,
    collectionid: string,
    requestid: string
  ) => void;
  updateRequest: (
    workspaceid: string,
    collectionid: string,
    requestid: string,
    data: Requests
  ) => void;
};

export const useWorkspace = create<workspacetype>()(
  devtools((set) => ({
    workspaces: [],
    openedWorkspace: null,
    openedCollection: null,

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
                collection: [{ ...data, request: [] }, ...w.collection],
              }
            : w
        ),
      }));
    },

    setOpendcollection: (data) => {
      set((state) => ({
        openedCollection: data,
      }));
    },
    setCollection: (workspaceid, data) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceid
            ? {
                ...w,
                collection: data.map((c) => ({
                  ...c,
                  request: [], // ✅ ensure each collection has request
                })),
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
    //request
    setRequests: (workapceid, collecitonid, data) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workapceid
            ? {
                ...w,
                collection: w.collection.map((c) =>
                  c.id === collecitonid
                    ? {
                        ...c,
                        request: [...data, ...c.request],
                      }
                    : c
                ),
              }
            : w
        ),
      }));
    },

    addRequests: (workapceid, collecitonid, data) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workapceid
            ? {
                ...w,
                collection: w.collection.map((c) =>
                  c.id === collecitonid
                    ? {
                        ...c,
                        request: [...c.request, data],
                      }
                    : c
                ),
              }
            : w
        ),
      }));
    },

    updateRequest: (workspaceid, collectionid, requestid, data) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceid
            ? {
                ...w,
                collection: w.collection.map((c) =>
                  c.id === collectionid
                    ? {
                        ...c,
                        request: c.request.map((r) =>
                          r.id === requestid
                            ? {
                                ...data,
                              }
                            : r
                        ),
                      }
                    : c
                ),
              }
            : w
        ),
      }));
    },

    deleteRequest: (workspaceId, collectionid, requestid) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceId
            ? {
                ...w,
                collection: w.collection.map((c) =>
                  c.id === collectionid
                    ? {
                        ...c,
                        request: c.request.filter((r) => r.id !== requestid),
                      }
                    : c
                ),
              }
            : w
        ),
      }));
    },
  }))

  //
);
