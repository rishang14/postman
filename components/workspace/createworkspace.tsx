"use client";
import Modal from "../globals/modals";
import React, {
  useState,
} from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { createWorkspace } from "@/action/action";
import { useWorkspace } from "@/lib/store/workspace.store";

const CreateWorkspace = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}) => {
  console.log("i am childe component of the workspace ");
  const [name, setName] = useState("");
  const [pending, setIspending] = useState<boolean>(false);
  const { addworkspace } = useWorkspace();
  const [err, setErr] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (name.trim().length < 3) {
      setErr("Workspace name should contain atleast 3 words");
      return;
    }
    setIspending(true);
    try {  
      let newWorkspaceName=  name.charAt(0).toUpperCase() + name.substring(1).toLowerCase(); 
      const createdspace = await createWorkspace({ name:newWorkspaceName });
      addworkspace(createdspace);
      toast.success("Congratulations", {
        duration: 3000,
        description: "Workspace is created",
      });
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
      title="Add New Workspace"
      description="Create a new workspace to organize your projects"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      submitText={pending ? "Creating Workspace..." : "Create Workspace"}
      submitVariant="default"
    >
      <div className="space-y-4">
        <Input
          className="w-full p-2 border rounded"
          placeholder="Workspace name..."
          value={name}
          disabled={pending}
          onChange={(e) => setName(e.target.value)}
        />
        {err && <span className=" text-destructive">{err}</span>}
      </div>
    </Modal>
  );
};

export default CreateWorkspace;
