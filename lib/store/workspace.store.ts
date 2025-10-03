import { Workspace } from "@prisma/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type workspacetype = {
  workspaces: Workspace[] | []; 
  openedWorkspace:Workspace | null; 
  setOpenwokrspace:(data:Workspace) =>void 
  setworkspace:(data:Workspace[])=>void
  addworkspace: (data: Workspace) => void;
  deleteworkspace: (data: Workspace) => void;
  updateworkspace: (workspaceid: string, values: Partial<Workspace>) => void;
};

export const useWorkspace = create<workspacetype>()(
  devtools((set) => ({
    workspaces:[], 
    openedWorkspace:null,  

    setOpenwokrspace(data) {
      set(()=>({
      openedWorkspace:data
      }))
    }, 

    setworkspace:(data)=>{
    set(()=>({
      workspaces: [...data],
    }))
    },
    addworkspace: (workspace) => {
      set((state) => ({
        workspaces: [workspace, ...state.workspaces].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        ),
      }));
    },
  }))
);
