import React from 'react'
import { Form, FormGroup, Label, Input,  } from 'reactstrap';



export default class extends React.Component {
  render() {
    return (

      <div>
       <Form>
        <FormGroup>
          <Label for="exampleEmail">First name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Last name</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
         <FormGroup>
           <Label for="examplePassword">Card number</Label>
           <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
         </FormGroup>
         <FormGroup>
           <Label for="examplePassword">Street</Label>
           <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
         </FormGroup>
         <FormGroup>
           <Label for="examplePassword">City</Label>
           <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
         </FormGroup>
         <FormGroup>
           <Label for="examplePassword">State</Label>
           <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
         </FormGroup>

      </Form>

      </div>

    )
  }
}
