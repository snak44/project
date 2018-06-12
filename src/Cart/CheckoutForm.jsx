import React from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'
import { Form, FormGroup, Label, Input } from 'reactstrap'




class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault()

    /**
     * To send the request for Postman:
     * 1. Enter in a valid credit card number (but don't actually, just use a test number 42442424242) and hit enter
     * 2. token.id is "source" on the postman request
     *
     *
     * Work to be done:
     * - Get the name of the user from your own inputs
     * - Get the amount (the total price) and that is going to be the amount for the purchase (for the request the amount is going to be *10)
     * - When the request to charge the person succeeds save the id from the data from that request to the database
     *
     */

    this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
      console.log('Received Stripe token:', token) // token.id

    })

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  handleCardChange = (ev) => {
    console.log('Card change event', ev)
  }

  state = {

  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>

        <button>Confirm order</button>


        <FormGroup className="form">
          <Label for="First name">First name</Label>
          <Input type="First name" name="First name" id="First name" placeholder="First name"/>
        </FormGroup>

        <FormGroup className="form2">
          <Label for="Last name">Last name</Label>
          <Input type="Last name" name="Last name" id="Last name" placeholder="Last name"/>
        </FormGroup>
        <FormGroup className="form3">
          <Label for="Street">Street</Label>
          <Input type="Street" name="Street" id="Street" placeholder="Street"/>
        </FormGroup>
        <FormGroup className="form4">
          <Label for="City">City</Label>
          <Input type="City" name="City" id="City" placeholder="City"/>
        </FormGroup>
        <FormGroup className="form5">
          <Label for="examplePassword">State</Label>
          <Input type="password" name="State" id="State" placeholder="State"/>
        </FormGroup>


        <div className="card">
          <CardElement onChange={this.handleCardChange}/>
        </div>


      </Form>


    )
  }
}

export default injectStripe(CheckoutForm)