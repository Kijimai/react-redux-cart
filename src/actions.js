export const ACTIONS = {
  DECREASE: "DECREASE",
  INCREASE: "INCREASE",
  REMOVE: "REMOVE",
  CLEAR_CART: "CLEAR_CART",
  GET_TOTALS: "GET_TOTALS",
  TOGGLE_AMOUNT: "TOGGLE_AMOUNT",
}

///action creators

export const removeItem = (id) => {
  return { type: ACTIONS.REMOVE, payload: { id } }
}

export const increaseAmount = (id, amount) => {
  return { type: ACTIONS.INCREASE, payload: { id, amount } }
}

export const decreaseAmount = (id, amount) => {
  return { type: ACTIONS.DECREASE, payload: { id, amount } }
}


