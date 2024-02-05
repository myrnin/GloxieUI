import React from "react";

import { StyledTypography, TypographyProps } from "./Typography.styles";

interface GUITypographyProps extends TypographyProps {
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
const GUITypography = ({ label, ...props }: GUITypographyProps) => {
  return <StyledTypography {...props}>{label}</StyledTypography>;
};

export { GUITypography as Typography };
export type { GUITypographyProps as TypographyProps };
