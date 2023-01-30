import type { GlobalProvider } from "@ladle/react";
import React, { useLayoutEffect } from "react";
import "../index.css";
import "./style.css";
import * as NextImage from "next/image";
import type { ImageProps } from "next/image";

const OriginalNextImage = NextImage.default;

// For non-NextJS frameworks
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props: ImageProps) => <OriginalNextImage {...props} unoptimized />,
});

export const Provider: GlobalProvider = ({ children, globalState }) => {
  useLayoutEffect(() => {
    const body = document.body;
    body.classList.remove(...body.classList);

    body.classList.add("pomo-focus");
    body.classList.add(globalState.theme);
  }, [globalState.theme]);

  return <div className={`${globalState.theme}`}>{children}</div>;
};
