type Menu = {
  id: string
  name: string
  to?: string
  iconId: string
  nesteds?: Menu[]
}

export const MENU_ITEMS: Menu[] = [
  { id: "home", name: "Home", to: "/", iconId: "home" },
  {
    id: "debts",
    name: "Debts",
    iconId: "credit_card",
    nesteds: [
      {
        id: "create",
        name: "Create",
        to: "/debts/create",
        iconId: "add_circle_outline",
      },
      {
        id: "view",
        name: "View",
        to: "/debts",
        iconId: "receipt",
      },
    ],
  },
]
