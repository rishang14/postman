"use client";
import { updateCollection as updatecollection } from "@/action/action";
import Modal from "@/components/globals/modals";
import { useWorkspace } from "@/lib/store/workspace.store";
import React, { useState } from "react";
import { toast } from "sonner";

const EditCollectionModal = ({
  isModalOpen,
  setIsModalOpen,
  collectionId,
  initialName,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  collectionId: string;
  initialName: string;
}) => {
  const [name, setName] = useState(initialName);
  const [isPending, setIspending] = useState<boolean>(false); 
  const {updateCollection,openedWorkspace}=useWorkspace()
  const [err, setErr] = useState("");
  const handleSubmit = async () => {
   if (name.trim().length < 3) {
         setErr("Workspace name should contain atleast 3 words");
         return;
       }
       setIspending(true);
       try { 
         let newWorkspaceName = name.trim().charAt(0).toUpperCase() + name.trim().substring(1).toLowerCase();
         const createdCollection = await updatecollection({ name: newWorkspaceName,id:collectionId }); 
          updateCollection(openedWorkspace?.id as string,collectionId,{...createdCollection,request:[]})
         toast.success("Congratulations", {
           duration: 3000,
           description: "Collection is updated",
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
      title="Edit Collection"
      description="Rename your collection"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleSubmit}
      submitText={isPending ? "Saving..." : "Save Changes"}
      submitVariant="default"
      modalstate={isPending}
    >
      <div className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Collection name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div> 
          {err && <span className="text-destructive">{err}</span>}
    </Modal>
  );
};

export default EditCollectionModal;
