import { Debt } from "@/types"
import { createContext, useState } from "react"

type DebtsContextType = {
  debts: Debt[]
  setDebts: React.Dispatch<React.SetStateAction<Debt[]>>
}

const DebtsContext = createContext<DebtsContextType | null>(null)

export function DebtsProvider({ children }: React.PropsWithChildren) {
  const [debts, setDebts] = useState<Debt[]>([])
  return (
    <DebtsContext.Provider value={{ debts, setDebts }}>
      {children}
    </DebtsContext.Provider>
  )
}

export default DebtsContext
