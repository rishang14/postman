"use client";

import {
  deleteCollcetion as removeCollection,
  removeReq,
} from "@/action/action";
import Modal from "@/components/globals/modals";
import { useWorkspace } from "@/lib/store/workspace.store";
import { Requests } from "@prisma/client";
import React, { useState } from "react";
import { toast } from "sonner";

const DeleteReqModal = ({
  isModalOpen,
  setIsModalOpen,
  requestDetails,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  requestDetails: Requests;
}) => {
  const [isPending, setIspending] = useState<boolean>(false);
  const { deleteRequest, openedWorkspace } = useWorkspace();
  const handleDelete = async () => {
    setIspending(true);
    try {
      await removeReq(requestDetails.id);
      deleteRequest(
        openedWorkspace?.id as string,
        requestDetails.collectionId,
        requestDetails.id
      );
      toast.success("Deleted", {
        duration: 3000,
        description: "Request deleted successfully",
      });
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Server Error", {
        duration: 3000,
        description: "Something went wrong while deleting ",
      });
    } finally {
      setIspending(false);
    }
  };

  return (
    <Modal
      title="Delete Request"
      description="Are you sure you want to delete this Request? This action cannot be undone."
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleDelete}
      submitText={isPending ? "Deleting..." : "Delete"}
      submitVariant="destructive"
      modalstate={isPending}
    >
      <p className="text-sm text-zinc-500">
        Once deleted, requests will be permanently removed.
      </p>
    </Modal>
  );
};

export default DeleteReqModal;
