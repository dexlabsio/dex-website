import { ReactNode } from "react";
import { Button, type ButtonProps } from "./button";

export interface ActionButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
  className?: string;
}

function isExternalLink(href: string): boolean {
  return /^https?:\/\//.test(href);
}

function getExternalLinkProps(href: string) {
  return isExternalLink(href) 
    ? { target: "_blank" as const, rel: "noopener noreferrer" as const } 
    : {};
}

export function ActionButton({ 
  href, 
  text, 
  variant = "default", 
  size = "default",
  icon, 
  iconRight, 
  isButton = true,
  className
}: ActionButtonProps) {
  if (isButton) {
    return (
      <Button
        variant={variant}
        size={size}
        asChild
        className={className}
      >
        <a href={href} {...getExternalLinkProps(href)}>
          {icon}
          {text}
          {iconRight}
        </a>
      </Button>
    );
  }

  return (
    <a
      href={href}
      {...getExternalLinkProps(href)}
      className={className}
    >
      {icon}
      {text}
      {iconRight}
    </a>
  );
}