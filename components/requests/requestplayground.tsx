import { useWorkspace } from "@/lib/store/workspace.store";
import { Unplug } from "lucide-react";
import React from "react";
import TabBar from "./tabbar";

const Requestplayground = () => {
  const { openedRequest } = useWorkspace();

  if (!openedRequest) {
    return (
      <div className="flex space-y-4 flex-col h-full items-center justify-center">
        <div className="flex flex-col justify-center items-center h-40 w-40 border rounded-full bg-zinc-900">
          <Unplug size={80} className="text-indigo-400" />
        </div>
        
        <div className="py-2 ">
        <span className="text-indigo-400 "> Create new Request from the Collection </span>
        </div>
        
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col h-full">
        <TabBar/>
        <div className="flex-1 overflow-auto">{/* <RequestEditor /> */}</div>
      </div>
    </>
  );
};

export default Requestplayground;
