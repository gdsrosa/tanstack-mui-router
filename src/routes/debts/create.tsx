import CreateDebts from "@/modules/debts/pages/CreateDebt"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/debts/create")({
  component: CreateDebts,
})
