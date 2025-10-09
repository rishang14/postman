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
import { Collection, REST_METHOD } from "@prisma/client";
import { Input } from "../ui/input";
import { createRequest } from "@/action/action";
import { useWorkspace } from "@/lib/store/workspace.store";
import { Button } from "../ui/button";
import { Folder } from "lucide-react";

const AddRequestCollectionModal = ({
  isModalOpen,
  setIsModalOpen,
  collectionId,
  initialName = "Untitled",
  fromcollection,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  collectionId?: string;
  initialName: string;
  fromcollection: boolean;
}) => {
  const [url, setUrl] = useState("https://google.com");
  const [method, setMethod] = useState<REST_METHOD>(REST_METHOD.GET);
  const [name, setName] = useState(initialName);
  const { addRequests, openedWorkspace, workspaces, addtoOpenedRequest } =
    useWorkspace();
  const collectionavail =
    workspaces.find((w) => w.id === openedWorkspace?.id)?.collection || [];
  const [selectedCollection, setSelectedCollectionId] =
    useState<Collection | null>(collectionavail[0]);
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
      let collectionid = fromcollection
        ? collectionId
        : (selectedCollection?.id as string);
      let newWorkspaceName =
        name.trim().charAt(0).toUpperCase() +
        name.trim().substring(1).toLowerCase();
      const createdRequest = await createRequest({
        name: newWorkspaceName,
        collectionId: collectionid,
        url,
        method,
        saved: true,
      });
      console.log(openedWorkspace?.id, "workspace id ");
      console.log(collectionId, "colledtion id ");
      console.log(createdRequest, "data");
      addRequests(
        openedWorkspace?.id as string,
        collectionid as string,
        {...createdRequest,requestrun:[]}
      );
      if (!fromcollection) {
        addtoOpenedRequest({...createdRequest,requestrun:[]});
      }
      toast.success("Congratulations", {
        duration: 3000,
        description: "Request is created",
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
      title="Add Request to Collection"
      description="Create a new request in your collection"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      submitText={isPending ? "Adding..." : "Add Request"}
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

        {!fromcollection && (
          <>
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-200">
                Select location
              </label>

              <div className="flex items-center space-x-2 text-sm text-zinc-400 mb-3">
                <span>{openedWorkspace?.name || "workspace"}</span>
                <span>&rsaquo;</span>
                <span>Collections</span>
              </div>

              <div className="space-y-1 max-h-48 overflow-y-auto">
                {collectionavail.map((collection) => (
                  <div
                    key={collection.id}
                    onClick={() => setSelectedCollectionId(collection)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedCollection?.id === collection.id
                        ? "bg-indigo-600/20 border border-indigo-500/50 shadow-lg shadow-indigo-500/10"
                        : "hover:bg-zinc-800 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {selectedCollection?.id === collection.id ? (
                        <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      ) : (
                        <Folder className="w-4 h-4 text-zinc-400" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          selectedCollection?.id === collection.id
                            ? "text-indigo-200"
                            : "text-zinc-200"
                        }`}
                      >
                        {collection.name}
                      </span>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <span className="text-zinc-500">⋯</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {selectedCollection && (
              <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-zinc-400">Saving to:</span>
                  <Folder className="w-4 h-4 text-indigo-400" />
                  <span className="text-indigo-400 font-medium">
                    {selectedCollection.name}
                  </span>
                </div>
              </div>
            )}
          </>
        )}

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

export default AddRequestCollectionModal;
