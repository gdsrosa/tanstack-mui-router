import { db } from "@/lib/firebase"
import { child, ref } from "firebase/database"

export function getFirebaseEntityRef(entity: string) {
  const dbRef = ref(db)
  const entityRef = child(dbRef, entity)

  return entityRef
}
