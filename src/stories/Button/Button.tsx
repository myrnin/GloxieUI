import React from "react";
import { StyledButton, ButtonProps } from "./Button.styles";

interface GUIButtonProps extends ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
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
export const GUIButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: GUIButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <StyledButton
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export { GUIButton as Button };
export type { GUIButtonProps as ButtonProps };
