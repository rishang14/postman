"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HotkeysProvider } from "react-hotkeys-hook";
import { Toaster } from "sonner";

export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <HotkeysProvider>
        {children}
        <Toaster />
      </HotkeysProvider>
    </NextThemesProvider>
  );
}
