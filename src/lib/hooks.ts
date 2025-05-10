import { getFirebaseEntityRef } from "@/modules/debts/db/lib"
import { Debt } from "@/types"
import { DataSnapshot, off, onValue } from "firebase/database"
import { useEffect, useState } from "react"

export function useDebts() {
  const [debts, setDebts] = useState<Debt[] | undefined>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const debtsRef = getFirebaseEntityRef("debts")

    onValue(debtsRef, (snapshot: DataSnapshot) => {
      const items: Debt[] = []

      snapshot.forEach(child => {
        items.push(child.val())
      })

      setDebts(items)
      setLoading(false)
    })

    return () => off(debtsRef)
  }, [])

  return { debts, loading }
}
