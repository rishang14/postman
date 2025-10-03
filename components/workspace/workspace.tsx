"use client";
import React, { useState } from "react";
import { Hint } from "../ui/hint";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Plus, User } from "lucide-react";

const Workspace = () => {
  // const [open,setOpen]=useState(false)
  return (
    <>
      <Hint label="Change Workspace">
         <p>WORKSPACE</p>
         </Hint>
    </>
  );
};

export default Workspace;
