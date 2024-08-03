import { type Container } from "@/types";

export function Container({ children, containerClasses }: Container) {
  return <div className={`container ${containerClasses}`}>{children}</div>;
}
