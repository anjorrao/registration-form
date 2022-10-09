import "./App.css";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Input from "./components/UI/Input/Input";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isValid, setValid] = useState(false);

  const fNameChangeHandler = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const lNameChangehandler = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const emailChangeHandler = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      <Card>
        <h3>Registration Form</h3>
        <form onSubmit={submitHandler}>
          {isFormSubmitted && isValid ? (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          ) : null}

          <Input
            value={values.firstName}
            label="First Name"
            name="first-name"
            placeholder="Enter value"
            type="text"
            onChange={fNameChangeHandler}
            isSubmitted={isFormSubmitted}
          ></Input>
          <Input
            label="Last Name"
            value={values.lastName}
            name="last-name"
            placeholder="Enter value"
            type="text"
            onChange={lNameChangehandler}
            isSubmitted={isFormSubmitted}
          ></Input>
          <Input
            label="Email ID"
            value={values.email}
            name="email"
            placeholder="Enter value"
            type="email"
            onChange={emailChangeHandler}
            isSubmitted={isFormSubmitted}
          ></Input>
          <Button>Register</Button>
        </form>
      </Card>
    </div>
  );
}

export default App;
