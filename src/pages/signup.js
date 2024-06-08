import React from "react";
import { FormField, Button, Checkbox, Form, Input } from "semantic-ui-react";

const SignUp = () => {
    const onSignUpClick = ()=>{
        console.log()
    }
    return(
  <div class="ui segment">
    <Form>
      <FormField
        id="form-input-control-first-name"
        control={Input}
        label="First name"
        placeholder="First name"
      />
      <FormField
        id="form-input-control-last-name"
        control={Input}
        label="Last name"
        placeholder="Last name"
      />
      <FormField
        id="form-input-control-error-email"
        control={Input}
        label="Email"
        placeholder="Please enter a valid email address"
        // error={{
        //   content: "Please enter a valid email address",
        //   pointing: "below",}}
      />
      <FormField>
        <Checkbox label="I agree to the Terms and Conditions" />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  </div>
)};

export default SignUp;
