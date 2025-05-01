import { db } from "@/lib/firebase"
import { Debt } from "@/types"
import { child, get, getDatabase, ref, set } from "firebase/database"
import { v4 as uuidv4 } from "uuid"

export function createDebt(data: Debt) {
  const userId = uuidv4()
  set(ref(db, `debts/${userId}`), { ...data, id: userId })
}

export async function getDebts() {
  const dbRef = ref(getDatabase())
  const debtsRef = child(dbRef, `debts`)
  const snapshot = await get(debtsRef)
  const data: Debt[] = []

  try {
    if (snapshot.exists()) {
      snapshot.forEach(child => {
        data.push(child.val())
      })

      return data
    }
    return []
  } catch (error) {
    console.error(error)
  }
}
