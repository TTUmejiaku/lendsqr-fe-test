import { LoginPage } from "@/pages";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: LoginPage,
});
