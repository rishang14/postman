"use client";

import { deleteCollcetion as removeCollection } from "@/action/action";
import Modal from "@/components/globals/modals";
import { useWorkspace } from "@/lib/store/workspace.store";
import React, { useState } from "react";
import { toast } from "sonner";

const DeleteCollectionModal = ({
  isModalOpen,
  setIsModalOpen,
  collectionId,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  collectionId: string;
}) => {
  const [isPending,setIspending]=useState<boolean>(false) 
  const {deleteCollection,openedWorkspace}=useWorkspace()
  const handleDelete = async () => { 
    setIspending(true)
   try {
    const deltecollection = await removeCollection(collectionId);  
    deleteCollection(openedWorkspace?.id as string,collectionId); 
    toast.success("Deleted",{duration:3000,description:"Collection deleted successfully"})
    setIsModalOpen(false)
   } catch (error) {
    toast.error("Server Error",{duration:3000,description:"Something went wrong while deleting "})
   }finally{
    setIspending(false)
   }
  };

  return (
    <Modal
      title="Delete Collection"
      description="Are you sure you want to delete this collection? This action cannot be undone."
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleDelete}
      submitText={isPending ? "Deleting..." : "Delete"}
      submitVariant="destructive"
      modalstate={isPending}
    >
      <p className="text-sm text-zinc-500">
        Once deleted, all requests and data in this collection will be
        permanently removed.
      </p>
    </Modal>
  );
};

export default DeleteCollectionModal;
