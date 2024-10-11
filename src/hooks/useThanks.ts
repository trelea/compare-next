"use client";

import React from "react";

export function useThanks() {
  React.useEffect(() => {
    setTimeout(() => (window.location.pathname = "/home"), 2000);
  }, []);
}
