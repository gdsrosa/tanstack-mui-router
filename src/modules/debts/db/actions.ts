import { db } from "@/lib/firebase"
import { Debt } from "@/types"
import { ref, remove, set } from "firebase/database"
import { v4 as uuidv4 } from "uuid"

export function createDebt(data: Debt) {
  const debtId = uuidv4()
  set(ref(db, `debts/${debtId}`), { ...data, id: debtId })
}

export async function deleteDebt(debtId: string) {
  remove(ref(db, `debts/${debtId}`))
}
