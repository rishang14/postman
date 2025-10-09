import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { runRequest } from "@/action/action";

import { useWorkspace } from "@/lib/store/workspace.store";
import { REST_METHOD } from "@prisma/client";

const requestColorMap: Record<string, string> = {
  GET: "text-green-500",
  POST: "text-blue-500",
  PUT: "text-yellow-500",
  DELETE: "text-red-500",
};

const RequestBar = () => {
  const {
    openedRequest,
    updateRequest,
    openedCollection,
    openedWorkspace,
    setOpendRequests,
    updateallopenedReq,
  } = useWorkspace();
  if (!openedRequest) return null;

  const handlechange = (method: REST_METHOD) => {
    updateRequest(
      openedWorkspace?.id as string,
      openedCollection?.id as string,
      openedRequest.id,
      {
        ...openedRequest,
        method,
        saved: false,
      }
    );
    setOpendRequests({ ...openedRequest, method, saved: false });
    updateallopenedReq({ ...openedRequest, method, saved: false });
  };

  const runReq = async () => {
    try {
      const { requestdata, success } = await runRequest(openedRequest);
      if (success && requestdata) {
        updateRequest(
          openedWorkspace?.id as string,
          openedCollection?.id as string,
          openedRequest.id,
          requestdata
        );
        setOpendRequests(requestdata);
        updateallopenedReq(requestdata);
      }else if(!success && requestdata){
         updateRequest(
          openedWorkspace?.id as string,
          openedCollection?.id as string,
          openedRequest.id,
          requestdata
        );
        setOpendRequests(requestdata);
        updateallopenedReq(requestdata);
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-row items-center justify-between bg-zinc-900 rounded-md px-2 py-2 w-full">
      <div className="flex flex-row items-center gap-2 flex-1">
        <Select value={openedRequest?.method} onValueChange={handlechange}>
          <SelectTrigger
            className={`w-24 ${requestColorMap[openedRequest?.method] || "text-gray-500"}`}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="GET" className="text-green-500">
                GET
              </SelectItem>
              <SelectItem value="POST" className="text-blue-500">
                POST
              </SelectItem>
              <SelectItem value="PUT" className="text-yellow-500">
                PUT
              </SelectItem>
              <SelectItem value="DELETE" className="text-red-500">
                DELETE
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          value={openedRequest.url || ""}
          onChange={(e) => {
            updateRequest(
              openedWorkspace?.id as string,
              openedCollection?.id as string,
              openedRequest.id,
              {
                ...openedRequest,
                url: e.target.value,
                saved: false,
              }
            );
            setOpendRequests({
              ...openedRequest,
              url: e.target.value,
              saved: false,
            });
            updateallopenedReq({
              ...openedRequest,
              url: e.target.value,
              saved: false,
            });
          }}
          placeholder="Enter URL"
          className="flex-1"
        />
      </div>

      <Button
        type="submit"
        onClick={runReq}
        disabled={openedRequest.url.length < 5}
        className="ml-2 text-white  font-bold bg-indigo-500 hover:bg-indigo-600"
      >
        <Send className="mr-2" />
        Send Request
      </Button>
    </div>
  );
};

export default RequestBar;
