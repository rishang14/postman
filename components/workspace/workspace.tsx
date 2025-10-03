"use client";
import React, { useEffect, useState } from "react";
import { Hint } from "../ui/hint";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Loader, Plus, User } from "lucide-react";
import { Workspace as WorkSpacetype } from "@prisma/client";
import { useWorkspace } from "@/lib/store/workspace.store";
import { Separator } from "../ui/separator";
import CreateWorkspace from "./createworkspace";

type prop = {
  allworkspaces: WorkSpacetype[];
};

const Workspace = ({ allworkspaces }: prop) => {
  const {
    addworkspace,
    openedWorkspace,
    setOpenwokrspace,
    workspaces,
    setworkspace,
  } = useWorkspace();
  const [openCreateModel, setopenCreateModel] = useState<boolean>(false);

  useEffect(() => {
    if (allworkspaces) {
      setworkspace(allworkspaces);
    }
  }, []);

  useEffect(() => {
    if (allworkspaces && allworkspaces.length > 0 && openedWorkspace === null) {
      setOpenwokrspace(allworkspaces[0]);
    }
  }, []);

  if (!allworkspaces) {
    return <Loader className="animate-spin text-indigo-400" size={40} />;
  }

  if (!allworkspaces || allworkspaces.length === 0) {
    return (
      <div className=" font-semibold text-indigo-400">No workspaces found</div>
    );
  }
  return (
    <>
      <Hint label="Change Workspace">
        <Select
          value={openedWorkspace?.id}
          onValueChange={(id) => {
            const selectedone = workspaces.find((i) => i.id === id);
            console.log(selectedone, "selectedone");
            if (selectedone) setOpenwokrspace(selectedone);
          }}
        >
          <SelectTrigger className="cursor-pointer">
            <User className="size-4 text-indigo-400" />
            <span className="text-sm text-indigo-400 font-semibold">
              <SelectValue placeholder="Select workspace" />
            </span>
          </SelectTrigger>
          <SelectContent>
            {workspaces.map((ws) => (
              <SelectItem key={ws.id} value={ws.id}>
                {ws.name}
              </SelectItem>
            ))}
            <Separator className=" my-1" />
            <div className="p-2 flex flex-row justify-between items-center">
              <span className="text-sm font-semibold text-zinc-600">
                My Workspaces
              </span>
              <Button
                size="icon"
                variant="outline"
                className="cursor-pointer"
                onClick={() => setopenCreateModel(true)}
              >
                <Plus size={16} className="text-white" />
              </Button>
            </div>
          </SelectContent>
        </Select>
      </Hint>
      <CreateWorkspace
        isModalOpen={openCreateModel}
        setIsModalOpen={setopenCreateModel}
      />
    </>
  );
};

export default Workspace;
