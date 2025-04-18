import cars from "."

type Price = {
  amount: string
  currency: string
  locale: string
}

type ApiResponse = {
  modelClass: string
  version: string
  price: Price
  imagePath: string
}

const api = new Promise<ApiResponse[]>((resolve, reject) => {
  try {
    resolve(cars)
  } catch (error) {
    reject("Unable to fetch cars")
    console.error(error)
  }
})

export default api
