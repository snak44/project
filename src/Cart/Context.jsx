import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext('cart')

export {
  Consumer,
}

const saveCart = cart => localStorage.setItem('cart', JSON.stringify(cart))
const getCart = () => (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
const saveName = cart => localStorage.setItem('name', JSON.stringify(cart))
const getName = () => (localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : [])

export class CartProvider extends Component {

  state = {
    cart: (getCart() || []),
    name: (getName() || ''),
  }

  addName = firstName => {
    const {name} = this.state
  }

  add = product => {
    const { cart } = this.state

    let modified = []

    if (cart.some(item => item.id === product.id)) {

      modified = cart.map(item => {


        if (item.id === product.id) {
          const quantity = item.quantity + 1
          return { ...item, quantity, subtotal: item.price * quantity }
        }
        return item
      })

      this.setState({
        cart: modified,
      })
    } else {
      modified = [...this.state.cart, { ...product, quantity: 1, subtotal: product.price }]

      this.setState({
        cart: modified,
      })
    }

    saveCart(modified)
  }

  update = (productId, quantity) => {
    const { cart } = this.state

    let modified = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity, subtotal: quantity * item.price }
      }
      return item
    })
    this.setState({
      cart: modified,
    })

    saveCart(modified)
  }

  remove = productId => {
    const { cart } = this.state
    const modified = [...cart.filter(item => item.id !== productId)]
    this.setState({
      cart: modified,
    })
    saveCart(modified)
  }

  clear = () => {
    this.setState({
      cart: [],
    })
    saveCart(this.state.cart)
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,

          cart: () => localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],

          addToCart: product => this.add(product),
          updateCart: (productId, quantity) => this.update(productId, quantity),
          removeFromCart: productId => this.remove(productId),
          clearCart: () => this.clear(),

          totalItems: () => (getCart()).map(item => item.quantity).reduce((prev, current) => prev + current, 0),
          totalPrice: () => (getCart()).map(item => item.subtotal).reduce((prev, current) => prev + current, 0),
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}
