import type { JSX } from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: JSX.Element;
}) {
  return <div className={className + " px-4 max-w-7xl mx-auto"}>{children}</div>;
}
