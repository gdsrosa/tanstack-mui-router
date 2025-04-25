import DebtsContext from "@/modules/debts/contexts/DebtsContext"
import { useContext } from "react"

export function useDebtsContext() {
  const context = useContext(DebtsContext)
  if (!context) {
    throw new Error("useDebtsContext must be used within a DebtsProvider")
  }
  return context
}

export function useDebts() {
  const { debts, setDebts } = useDebtsContext()
  return { debts, setDebts }
}
