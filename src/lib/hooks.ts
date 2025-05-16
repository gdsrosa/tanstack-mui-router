import { getFirebaseEntityRef } from "@/modules/debts/db/lib"
import { Debt } from "@/types"
import { child, DataSnapshot, get, off, onValue } from "firebase/database"
import { useEffect, useState } from "react"

const debtsRef = getFirebaseEntityRef("debts")

export function useDebts() {
  const [debts, setDebts] = useState<Debt[] | undefined>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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

export function useDebt(debtId: string) {
  const [debt, setDebt] = useState<Debt | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getDebt() {
      try {
        const snapshot = await get(child(debtsRef, `debts/${debtId}`))

        if (snapshot.exists()) {
          setDebt(snapshot.val())
        }
      } catch (error) {
        console.error(error)
        setDebt(undefined)
      } finally {
        setLoading(false)
      }
    }
    getDebt()
  }, [debtId])

  return { debt, loading }
}
