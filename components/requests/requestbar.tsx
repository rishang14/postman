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
import { updateRequest as updatereq } from "@/action/action";
import { toast } from "sonner";
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
  const [isPending, setIspending] = useState<boolean>(false);
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

  const onSendRequest = async () => {
    setIspending(true);
    const updatedReq = await updatereq({ ...openedRequest, saved: true });
    updateRequest(
      openedWorkspace?.id as string,
      openedCollection?.id as string,
      openedRequest.id,
      {
        ...openedRequest,
        saved: true,
      }
    );
    setOpendRequests({ ...openedRequest, saved: true });
    updateallopenedReq({ ...openedRequest, saved: true });
    toast.success("Congratulations", {
      duration: 3000,
      description: "Your request is updated successfully",
    });
    setIspending(false);
  };
  return (
    <div className="flex flex-row items-center justify-between bg-zinc-900 rounded-md px-2 py-2 w-full">
      <div className="flex flex-row items-center gap-2 flex-1">
        <Select value={openedRequest?.method} onValueChange={handlechange}>
          <SelectTrigger
            className={`w-24 ${requestColorMap[openedRequest?.method] || "text-gray-500"}`}
            disabled={isPending}
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
              { ...openedRequest, url: e.target.value, saved: false }
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
          disabled={isPending}
          placeholder="Enter URL"
          className="flex-1"
        />
      </div>

      <Button
        type="submit"
        onClick={onSendRequest}
        disabled={isPending || openedRequest.url.length < 5}
        className="ml-2 text-white  font-bold bg-indigo-500 hover:bg-indigo-600"
      >
        <Send className="mr-2" />
        Send
      </Button>
    </div>
  );
};

export default RequestBar;
