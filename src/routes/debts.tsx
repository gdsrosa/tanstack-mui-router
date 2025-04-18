import Debts from "@/pages/Debts"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/debts")({
  component: Debts,
})
