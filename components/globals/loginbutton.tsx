"use client";
import React from "react";
import { signIn } from "@/lib/auth-client";
import { Button } from "../ui/button";

const Loginbutton = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-3">
      <Button
        variant="outline"
        className="w-full cursor-pointer"
        onClick={() =>
          signIn.social({
            provider: "google",
            callbackURL: "/",
          })
        }
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default Loginbutton;
