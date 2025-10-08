"use client";
import { useWorkspace } from "@/lib/store/workspace.store";
import React from "react";
import RequestBar from "./requestbar";
import Requesteditorarea from "./requesteditorarea";

const Requesteditor = () => {
  const { openedRequest } = useWorkspace();
   console.log(openedRequest,"req are openend now  for",openedRequest?.name)
  if (!openedRequest) return null;
  return (
    <div className="flex flex-col items-center justify-start py-4 px-4">
      <RequestBar />

      <div className="flex flex-1 flex-col w-full justify-start mt-4 items-center ">
        <Requesteditorarea />
      </div>
      {/* {
        responseViewerData &&
       <ResponseViewer responseData={responseViewerData} />
       } */}
    </div>
  );
};

export default Requesteditor;
