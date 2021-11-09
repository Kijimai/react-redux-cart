import { ACTIONS } from "./actions"

function reducer(state, action) {
  let tempCart = []

  switch (action.type) {
    case ACTIONS.DECREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 }
        }
        return item
      })
      return { ...state, cart: tempCart }
    case ACTIONS.INCREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return (item = { ...item, amount: item.amount + 1 })
        }
        return item
      })
      return { ...state, cart: tempCart }
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
    default:
      return { ...state }
  }
}

export default reducer
