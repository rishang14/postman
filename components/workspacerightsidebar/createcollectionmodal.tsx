"use client";

import Modal from "../globals/modals";

import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { useWorkspace } from "@/lib/store/workspace.store";

const CreateCollectionModal= ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const [isPending, setIspending] = useState(false);
  const [err, setErr] = useState(""); 
  const {addCollcetion,openedWorkspace}=useWorkspace()

  const handleSubmit = async () => {
    if (name.trim().length < 3) {
      setErr("Collection name should contain atleast 3 words");
      return;
    }
    setIspending(true);
    try {
      let newWorkspaceName = name.trim().charAt(0).toUpperCase() + name.trim().substring(1).toLowerCase();
        const createdCollection = await ({ name: newWorkspaceName });
      //   addworkspace({...createdspace as workspacewithmember , collection:[]});
      toast.success("Congratulations", {
        duration: 3000,
        description: "Collection is created",
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
      title="Add New Collection"
      description="Create a new Collection to organize your requests"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      submitText={isPending ? "Creating..." : "Create Collection"}
      submitVariant="default"
      modalstate={isPending}
    >
      <div className="space-y-4">
        <Input
          className="w-full p-2 border rounded"
          placeholder="Collection name..."
          value={name}
          disabled={isPending}
          onChange={(e) => setName(e.target.value)}
        />
        {err && <span className=" text-destructive">{err}</span>}
      </div>
    </Modal>
  );
};

export default CreateCollectionModal;
