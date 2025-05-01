import { getDebts } from "@/modules/debts/db/actions"
import { Debt } from "@/types"
import { useEffect, useState } from "react"

export function useDebts() {
  const [debts, setDebts] = useState<Debt[] | undefined>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getDebts()
        setDebts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [])

  return { debts, loading }
}
