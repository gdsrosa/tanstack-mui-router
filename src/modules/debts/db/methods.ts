import { db } from "@/lib/firebase"
import { Debt } from "@/types"
import { child, get, ref } from "firebase/database"

export async function getFirebaseEntityRef(entity: string) {
  const dbRef = ref(db)
  const entityRef = child(dbRef, entity)

  return entityRef
}

export async function getDebts() {
  const debtsRef = await getFirebaseEntityRef("debts")
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
