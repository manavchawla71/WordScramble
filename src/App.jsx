import { useState } from "react";
import validator from "validator"; // Assuming this is used for password validation.

function App() {
  const [count, setCount] = useState(0);
  const [errormsg, setErrormsg] = useState("");

  function validate(password) {
    if (validator.isStrongPassword(password)) {
      setErrormsg("Password strength: Strong");
    } else {
      setErrormsg("Password strength: Weak");
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Password Validator</h1>
      <div style={{ marginLeft: "200px" }}>
        <pre>
          <p>Checking password strength</p>
          <span>Enter Password:</span>
          <input type="text" onChange={(e) => validate(e.target.value)} />
          <br />
          <span>{errormsg}</span>
        </pre>
      </div>
    </>
  );
}

export default App;
