import { auth } from "@/auth";
import DashboardRootLayout from "./layout/layout";
import { SessionProvider } from "next-auth/react"
import React from "react";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <DashboardRootLayout>
        {children}
      </DashboardRootLayout>
    </SessionProvider>
      
  )
}
