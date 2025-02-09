"use client";

import { useEffect } from "react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Remove Grammarly attributes that cause hydration errors
    const body = document.querySelector("body");
    if (body) {
      body.removeAttribute("data-new-gr-c-s-check-loaded");
      body.removeAttribute("data-gr-ext-installed");
    }
  }, []);

  return <>{children}</>;
} 