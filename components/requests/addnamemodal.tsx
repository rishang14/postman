"use client";
import Modal from "../globals/modals";
import React, { useState } from "react";
import { toast } from "sonner";
import { Sparkle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { updateRequest as updatereq } from "@/action/action";
import { Input } from "@/components/ui/input";
import { Requests } from "@prisma/client";
import { useWorkspace } from "@/lib/store/workspace.store";

const AddNameModal = ({
  isModalOpen,
  setIsModalOpen,
  opendtab,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  opendtab: Requests;
}) => {
  const [suggestions, setSuggestions] = useState<
    Array<{ name: string; reasoning: string }>
  >([]);
  const [isPending, setIspending] = useState<boolean>(false);
  const [name, setName] = useState(opendtab.name);
  const [err, setErr] = useState(false);
  const {
    openedCollection,
    openedWorkspace,
    updateRequest,
    updateallopenedReq,
    setOpendRequests,
  } = useWorkspace();

  const handleSubmit = async () => { 
    setIspending(true);
    if (name.trim().length< 4) {
      setErr(true); 
      return;
    }
    try {
      let newRequestname =
        name.trim().charAt(0).toUpperCase() +
        name.trim().substring(1).toLowerCase();
      const updatedReq = await updatereq({
        id: opendtab.id,
        name: newRequestname,
      });
      updateRequest(
        openedWorkspace?.id as string,
        openedCollection?.id as string,
        opendtab.id,
        { ...opendtab, name: newRequestname }
      );
      setOpendRequests({
        ...opendtab,
        name: newRequestname,
      });
      updateallopenedReq({
        ...opendtab,
        name: newRequestname,
      });
      toast.success("Congratulations", {
        duration: 3000,
        description: "Request is updated",
      });
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Server Error", {
        duration: 3000,
        description: "Internal server Error",
      });
    } finally {
      setIspending(false);
    }
  };

  return (
    <Modal
      title="Rename Request"
      description="Give your request a name"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      submitText={isPending ? "Saving" : "Save"}
      submitVariant="default"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-center gap-2">
          <Input
            className="w-full p-2 border rounded bg-zinc-900 text-white"
            placeholder="Request Name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
         
          {/* <Button
            variant={"outline"}
            size={"icon"}
            onClick={async () => {
              if (!tab) return;
              try {
                const result = await mutateAsync({
                  workspaceName: tab.workspaceId || "Default Workspace",
                  method:
                    (tab.method as
                      | "GET"
                      | "POST"
                      | "PUT"
                      | "PATCH"
                      | "DELETE") || "GET",
                  url: tab.url || "",
                  description: `Request in collection ${tab.collectionId || ""}`,
                });

                if (result.suggestions && result.suggestions.length > 0) {
                  setSuggestions(result.suggestions);
                  setName(result.suggestions[0].name);
                  toast.success("Generated name suggestions");
                }
              } catch (error) {
                toast.error("Failed to generate name suggestions");
              }
            }}
            disabled={isPending}
          >
            <Sparkles className="h-5 w-5 text-indigo-500" />
          </Button> */}
        </div> 
         {err && (
            <span className="text-destructive">
              min 3 letters are required{" "}
            </span>
          )}
        {/* {suggestions.length > 0 && (
          <div className="flex flex-col gap-2">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center p-2 border rounded bg-zinc-900 hover:bg-zinc-800 cursor-pointer"
                onClick={() => setName(suggestion.name)}
              >
                <span className="text-sm text-white">{suggestion.name}</span>
                <span className="text-xs text-gray-400">
                  {suggestion.reasoning}
                </span>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </Modal>
  );
};

export default AddNameModal;
