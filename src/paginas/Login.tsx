import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (ev2t: any) => {
    //Prevent page reload
    ev2t.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  // const renderErrorMessage = (name: any) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  // JSX code for login form
  const renderForm = (
    <div className="form" style={{ position: 'unset' }}>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>E-mail </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Senha </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div className="app" >
        <div className="login-form" style={{ borderRadius: '10px' }}  >
          <img src='./pudim.jpg' style={{ position: 'relative', borderRadius: '10px', left: '18%' }} />
          <div className="title" style={{ position: 'relative', borderRadius: '10px', left: '35%' }} >Login</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    </div>
  );

}


export default App;