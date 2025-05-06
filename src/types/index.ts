import { ReactElement } from "react"

export interface Debt {
  id?: string
  amount: string
  creditor: string
  recurrent: boolean
  notify: boolean
  actions?: ReactElement
}
