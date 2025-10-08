import { useWorkspace } from "@/lib/store/workspace.store";
import { X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import AddRequestCollectionModal from "../workspacerightsidebar/addrequestmodal";
import { useHotkeys } from "react-hotkeys-hook";
import { toast } from "sonner";
import AddNameModal from "./addnamemodal";
const requestColorMap: Record<string, string> = {
  GET: "text-green-500",
  POST: "text-blue-500",
  PUT: "text-yellow-500",
  DELETE: "text-red-500",
};
const TabBar = () => {
  const {
    allopendRequest,
    openedRequest,
    setOpendRequests,
    removeFromallOpendRequest,
    openedWorkspace,
    workspaces,
  } = useWorkspace();
  const [addnewtabmodalOpen, setaddnewtabmodalopen] = useState(false);
  const [changeNameModealOpen, setChangeNameModalopen] = useState(false);

  const handleaddnewTab = () => {
    setaddnewtabmodalopen(true);
  };

  return (
    <>
      <div className="flex items-center border-b border-zinc-800 bg-zinc-900">
        {allopendRequest.map((tab) => (
          <div
            key={tab.id}
            onDoubleClick={() => {
              setOpendRequests(tab);
              setChangeNameModalopen(true);
            }}
            onClick={() => setOpendRequests(tab)}
            className={`group px-4 py-2 flex items-center gap-2 cursor-pointer ${
              openedRequest?.id === tab.id
                ? "bg-zinc-800 text-white border-t-2 border-indigo-500 rounded-sm mx-2 my-2"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span
              className={`font-semibold ${
                requestColorMap[tab.method] || "text-gray-500"
              }`}
            >
              {tab.method}
            </span>

            <p className="max-w-xs truncate font-semibold flex items-center gap-1">
              {tab.name}
              {tab.saved ? (
                <span
                  className="text-green-500 transition-all ease-in-out
                "
                >
                  •
                </span>
              ) : (
                <span
                  className="text-red-500  transition-all ease-in-out
                "
                >
                  •
                </span>
              )}
            </p>

            <X
              className=" w-4 h-4 ml-2 hover:text-red-500 transition-all ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                if (!tab.saved) {
                  toast.info("Request Deatils", {
                    duration: 3000,
                    description:
                      "Your current File is unsaved Pls save before closing",
                  });
                  return;
                }
                removeFromallOpendRequest(tab.id);
              }}
            />
          </div>
        ))}
        <Button
          onClick={handleaddnewTab}
          variant={"ghost"}
          className="px-3 py-2 text-zinc-400  curosr-pointer hover:text-white"
        >
          +
        </Button>
      </div>

      {openedRequest && (
        <AddNameModal
          isModalOpen={changeNameModealOpen}
          setIsModalOpen={setChangeNameModalopen}
          opendtab={openedRequest}
        />
      )}

      <AddRequestCollectionModal
        isModalOpen={addnewtabmodalOpen}
        setIsModalOpen={setaddnewtabmodalopen}
        fromcollection={false}
        initialName="Untitled"
      />
    </>
  );
};

export default TabBar;
