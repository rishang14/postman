import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Hint } from "../ui/hint";
import { UserPlus, Copy, LinkIcon } from "lucide-react";

const Invitemember = () => {
  return (
    <>
      <DropdownMenu>
        <Hint label="Invite Member">
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"} className="cursor-pointer" >
              <UserPlus className="size-4"  color="#fff"/>
            </Button>
          </DropdownMenuTrigger>
        </Hint>

        <DropdownMenuContent className="w-80 rounded-xl" align="end">
          <div className="p-4">
            <DropdownMenuLabel>
              Invite to
              {/* {selectedWorkspace?.name} */}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Members Avatars */}
            <div className="flex -space-x-2 overflow-hidden mb-3">
              {/* {isLoading ? (
                <p className="text-xs text-muted-foreground">
                  Loading members...
                </p>
              ) : (
                workspaceMembers?.map((member: any) => (
                  <Hint
                    key={member.id}
                    label={member.user.name || "Unknown User"}
                  >
                    <Avatar className="border-2 border-background size-8 mt-2">
                      <AvatarImage src={member.user.image || ""} />
                      <AvatarFallback>
                        {member.user.name?.charAt(0) || "?"}
                      </AvatarFallback>
                    </Avatar>
                  </Hint>
                ))
              )} */}
            </div>

            {/* Invite Link Input */}
            <div className="flex gap-2 items-center">
              <Input
                // value={inviteLink}
                placeholder="Generate an invite link..."
                readOnly
              />
              <Button
                variant="outline"
                size="icon"
                // onClick={copyToClipboard}
                // disabled={!inviteLink}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            {/* Generate Button */}
            <Button
              className="mt-3 w-full cursor-pointer  text-white"
              //   onClick={generateInviteLink}
              //   disabled={isPending}
            >
              <LinkIcon className="h-4 w-4 mr-2" />
              {/* {isPending ? "Generating..." : "Generate Link"} */}
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Invitemember;
