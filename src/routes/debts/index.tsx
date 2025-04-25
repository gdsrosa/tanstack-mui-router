import HomeDebts from "@/modules/debts/pages/Debts"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/debts/")({
  component: HomeDebts,
})
