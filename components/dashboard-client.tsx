"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardTabs } from "@/components/dashboard-tabs"
import { DashboardSkeleton } from "@/components/dashboard-skeleton"
import { useSession } from "@/lib/session"

export function DashboardClient() {
  const { session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
  }, [session, router])

  if (!session) {
    return <DashboardSkeleton />
  }

  return (
    <>
      <DashboardHeader />
      <DashboardTabs />
    </>
  )
}
