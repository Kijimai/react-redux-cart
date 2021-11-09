import React from "react"
// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
// items

import reducer from "./reducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
//dispatch method - send actions to the store
//actions (objects) - MUST HAVE TYPE PROPERTY! - What kind of action are you doing?
//DO NOT MUTATE THE STATE - redux is built on immutability (copy)

//initial store / state


const store = createStore(reducer)
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
