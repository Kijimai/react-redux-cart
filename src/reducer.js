import { ACTIONS } from "./actions"
import cartItems from "./cart-items"

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

function reducer(state = initialStore, action) {
  switch (action.type) {
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] }
    case ACTIONS.REMOVE:
      console.log(action.payload.id)
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case ACTIONS.GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount
          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
    case ACTIONS.TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.toggle === "increase") {
              return (item = { ...item, amount: item.amount + 1 })
            } else if (action.payload.toggle === "decrease") {
              return (item = { ...item, amount: item.amount - 1 })
            }
          }
          return item
        }),
      }
    default:
      return { ...state }
  }
}

export default reducer

// case ACTIONS.DECREASE:
//   tempCart = state.cart.map((item) => {
//     if (item.id === action.payload.id) {
//       item = { ...item, amount: item.amount - 1 }
//     }
//     return item
//   })
//   return { ...state, cart: tempCart }
// case ACTIONS.INCREASE:
//   tempCart = state.cart.map((item) => {
//     if (item.id === action.payload.id) {
//       return (item = { ...item, amount: item.amount + 1 })
//     }
//     return item
//   })
//   return { ...state, cart: tempCart }
