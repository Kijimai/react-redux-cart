import { ACTIONS } from "./actions"

function reducer(state, action) {
  let tempCart = []

  switch (action.type) {
    case ACTIONS.DECREASE:
      tempCart = []
      if(action.payload.amount === 1) {
        console.log(`it's one!`)
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
      } else {
        tempCart = state.cart.map(item => {
          if(item.id === action.payload.id) {
            item = {...item, amount: item.amount - 1}
          }
          return item
        })
      }
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
    default:
      return { ...state }
  }
}

export default reducer
