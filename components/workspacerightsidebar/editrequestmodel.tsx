"use client";

import Modal from "@/components/globals/modals";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { toast } from "sonner";
import { Requests, REST_METHOD } from "@prisma/client";
import { Input } from "../ui/input";
import { updateRequest as updatereq } from "@/action/action";
import { useWorkspace } from "@/lib/store/workspace.store";

const EditReqEditModal = ({
  isModalOpen,
  setIsModalOpen,
  requestdetails,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  requestdetails: Requests;
}) => {
  const [url, setUrl] = useState(requestdetails?.url || "");
  const [method, setMethod] = useState<REST_METHOD>(requestdetails.method);
  const [name, setName] = useState(requestdetails.name);
  const { updateRequest, openedWorkspace, workspaces } = useWorkspace();
  const [isPending, setIspending] = useState<boolean>(false);
  const [err, setErr] = useState({
    name: "",
    url: "",
  });

  const requestColorMap: Record<REST_METHOD, string> = {
    [REST_METHOD.GET]: "text-green-500",
    [REST_METHOD.POST]: "text-blue-500",
    [REST_METHOD.PUT]: "text-yellow-500",
    [REST_METHOD.DELETE]: "text-red-500",
    [REST_METHOD.PATCH]: "text-orange-500",
  };

  const handleSubmit = async () => { 
    setIspending(true);
    if (name.trim().length < 3) {
      setErr((prev) => ({
        ...prev,
        name: "min length of name should be greater than 3 ",
      }));
      return;
    }
    if (name.trim().length < 3) {
      setErr((prev) => ({
        ...prev,
        name: "min length of name should be greater than 3 ",
      }));
      return;
    }
    if (url.trim().length < 5) {
      setErr((prev) => ({
        ...prev,
        url: "min length of url should be greater than 5 ",
      }));
      return;
    }
    try {
      let newReqname =
        name.trim().charAt(0).toUpperCase() +
        name.trim().substring(1).toLowerCase();
      console.log(openedWorkspace?.id, "workspace id ");
      const updatedReq = await updatereq({
        id: requestdetails.id,
        collectionId: requestdetails.collectionId,
        url,
        method,
        name: newReqname, 
        
      });
      updateRequest(
        openedWorkspace?.id as string,
        updatedReq.collectionId,
        updatedReq.id,
        updatedReq,
      );
      toast.success("Congratulations", {
        duration: 3000,
        description: "Request is Edited",
      });
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Server Error", {
        duration: 3000,
        description: "Internal server Error",
      });
    } finally {
      setIspending(false);
      setName("");
    }
  };

  return (
    <Modal
      title="Edit Request to Collection"
      description="Edit a new request in your collection"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      submitText={isPending ? "Editing..." : "Edit Request"}
      submitVariant="default"
      modalstate={isPending}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Request Name</label>
          <Input
            className="w-full p-2 border rounded"
            placeholder="Enter request name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {err.name && <span className="text-destructive">{err.name}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">HTTP Method</label>
          <Select
            value={method}
            onValueChange={(value: REST_METHOD) => setMethod(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue>
                <span className={`font-medium ${requestColorMap[method]}`}>
                  {method}
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {Object.values(REST_METHOD).map((methodOption) => (
                <SelectItem key={methodOption} value={methodOption}>
                  <span
                    className={`font-medium ${requestColorMap[methodOption]}`}
                  >
                    {methodOption}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">URL</label>
          <Input
            className="w-full p-2 border rounded"
            placeholder="https://api.example.com/endpoint"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="url"
            required
          />
          {err.url && <span className="text-destructive">{err.url}</span>}
        </div>
      </div>
    </Modal>
  );
};

export default EditReqEditModal;
