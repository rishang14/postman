import {
  EllipsisVertical,
  FilePlus,
  Folder,
  Trash,
  Edit,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Collection, REST_METHOD } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import DeleteCollectionModal from "./deletecollectionmodal";
import EditCollectionModal from "./eidtcollectionmodal";
import AddRequestCollectionModal from "./addrequestmodal";
import { useWorkspace } from "@/lib/store/workspace.store";
import { getAllrequest } from "@/action/action";

// import EditCollectionModal from "./edit-collection";
// import DeleteCollectionModal from "./delete-collection";

const requestColorMap: Record<REST_METHOD, string> = {
  [REST_METHOD.GET]: "text-green-500",
  [REST_METHOD.POST]: "text-blue-500",
  [REST_METHOD.PUT]: "text-yellow-500",
  [REST_METHOD.DELETE]: "text-red-500",
  [REST_METHOD.PATCH]: "text-orange-500",
};

const Collectionfolder = ({ collection }: { collection: Collection }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddRequestOpen, setIsAddRequestOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const {
    setOpendcollection,
    openedCollection,
    openedWorkspace,
    workspaces,
    setRequests,
  } = useWorkspace();

  useEffect(() => {
    if (collection) {
      setOpendcollection(collection);
    }
  }, []);

  const requests = useMemo(() => {
    return (
      workspaces
        .find((w) => w.id === openedWorkspace?.id)
        ?.collection.find((c) => c.id === openedCollection?.id)?.request || []
    );
  }, [openedWorkspace?.id, openedCollection?.id, workspaces]);


  const handleGetallrequests = async () => {
    setOpendcollection(collection);
    if (requests.length > 0) return;
    const allrequests = await getAllrequest(collection.id);
    setRequests(openedWorkspace?.id as string, collection.id, allrequests);
  };
  const hasRequests = requests.length;

  return (
    <>
      <Collapsible
        open={isCollapsed}
        onOpenChange={setIsCollapsed}
        className="w-full"
      >
        <div className="flex flex-col w-full">
          {/* Collection Header */}
          <div className="flex flex-row justify-between items-center p-2 flex-1 w-full hover:bg-zinc-900 rounded-md">
            <CollapsibleTrigger
              className="flex flex-row justify-start items-center space-x-2 flex-1"
              onClick={handleGetallrequests}
            >
              <div className="flex items-center space-x-1">
                {hasRequests ? (
                  isCollapsed ? (
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  )
                ) : (
                  <div className="w-4 h-4" /> // Spacer when no requests
                )}
                <Folder className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-zinc-200 capitalize">
                  {collection.name}
                </span>
                {hasRequests && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                    <span className="text-xs text-zinc-400">
                      ({requests.length})
                    </span>
                  </div>
                )}
              </div>
            </CollapsibleTrigger>

            <div className="flex flex-row justify-center items-center space-x-2">
              <FilePlus
                className="w-4 h-4 text-zinc-400 hover:text-indigo-400 cursor-pointer"
                onClick={() => setIsAddRequestOpen(true)}
              />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1 hover:bg-zinc-800 rounded">
                    <EllipsisVertical className="w-4 h-4 text-zinc-400 hover:text-indigo-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem onClick={() => setIsAddRequestOpen(true)}>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="font-semibold flex justify-center items-center">
                        <FilePlus className="text-green-400 mr-2 w-4 h-4" />
                        Add Request
                      </div>
                      <span className="text-xs text-zinc-400 bg-zinc-700 px-1 rounded">
                        ⌘R
                      </span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="font-semibold flex justify-center items-center">
                        <Edit className="text-blue-400 mr-2 w-4 h-4" />
                        Edit
                      </div>
                      <span className="text-xs text-zinc-400 bg-zinc-700 px-1 rounded">
                        ⌘E
                      </span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsDeleteOpen(true)}>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="font-semibold flex justify-center items-center">
                        <Trash className="text-red-400 mr-2 w-4 h-4" />
                        Delete
                      </div>
                      <span className="text-xs text-zinc-400 bg-zinc-700 px-1 rounded">
                        ⌘D
                      </span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Collapsible Content - Requests List */}
          {
            <CollapsibleContent className="w-full">
              {hasRequests ? (
                <div className="ml-6 border-l border-zinc-800 pl-4 space-y-1">
                  {requests.map((request: any) => (
                    <div
                      key={request.id}
                      // onClick={() => openRequestTab(request)}
                      className="flex items-center justify-between py-2 px-3 hover:bg-zinc-900/50 rounded-md cursor-pointer group transition-colors"
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-xs font-bold px-2 py-1 rounded ${
                              requestColorMap[
                                request.method as keyof typeof requestColorMap
                              ] ?? ""
                            } bg-zinc-800`}
                          >
                            {request.method}
                          </span>
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="text-sm text-zinc-200 truncate font-medium">
                            {request.name || request.url}
                          </span>
                          {request.url && request.name && (
                            <span className="text-xs text-zinc-500 truncate">
                              {request.url}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="p-1 hover:bg-zinc-800 rounded">
                              <EllipsisVertical className="w-3 h-3 text-zinc-400" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-32">
                            <DropdownMenuItem>
                              <Edit className="text-blue-400 mr-2 w-3 h-3" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Trash className="text-red-400 mr-2 w-3 h-3" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="pl-8 py-2">
                  <span className="text-xs text-zinc-500 italic">
                    No requests yet
                  </span>
                </div>
              )}
            </CollapsibleContent>
          }
        </div>
      </Collapsible>

      <AddRequestCollectionModal
        isModalOpen={isAddRequestOpen}
        setIsModalOpen={setIsAddRequestOpen}
        collectionId={collection.id}
        initialName="Untitled Request"
      />

      <DeleteCollectionModal
        isModalOpen={isDeleteOpen}
        setIsModalOpen={setIsDeleteOpen}
        collectionId={collection.id}
      />
      <EditCollectionModal
        isModalOpen={isEditOpen}
        setIsModalOpen={setIsEditOpen}
        collectionId={collection.id}
        initialName={collection.name}
      />
    </>
  );
};

export default Collectionfolder;
