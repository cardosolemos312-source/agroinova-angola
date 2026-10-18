import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { administradorAutenticado } from "@/lib/admin-auth";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const autenticado = await administradorAutenticado();

  if (!autenticado) {
    redirect("/login");
  }

  return <>{children}</>;
}