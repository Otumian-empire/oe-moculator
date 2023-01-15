import { MouseEventHandler } from "react";

export interface TitleProps {
  name: string;
}

export interface ButtonProps {
  label: string;
  type: string;
  className: string;
  onClick: MouseEventHandler;
}
