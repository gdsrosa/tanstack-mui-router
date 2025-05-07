# Manage Life Stuff (TBC)

## Modules

- Debts (managing what I bought long term)
- WishRank (a curated list of your wishlist) - TBD

## Given a debt I want to be able to

- See the total of debts combined (only amount) [DONE]
- integration with supabase db, perhaps add prisma(?) - consider
  - Using Realtime DB from Firebase [DONE]
- Delete the debt [PARTIALLY DONE]
- Be reminded within 48, 24 hour prior to due payment by email
- Create a new recurrent debt [DONE]
- See all the current debts in a table [DONE]

## Debt Skeleton

- id (db only)
- value (String)
- creditor (String)
- isRecurrent (Boolean)
- notify (Boolean)
