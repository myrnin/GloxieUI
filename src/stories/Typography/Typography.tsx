import React from "react";
import "./Typography.css";
import { Typography } from "@mui/material";

interface TypographyProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the Typography be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Typography contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const GUITypography = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: TypographyProps) => {
  return <Typography {...props}>{label}</Typography>;
};

export { GUITypography as Typography };
