import "./PasswordGenerator.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useEffect } from "react";
import CopyAlert from "./CopyAlert";

const PasswordGenerator = () => {
  let initialPasswordLength = 16;
  let [password, setPassword] = useState("");
  let [isCopied, setIsCopied] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  function getRandomPassword(length) {
    let pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) {
      pool += "0123456789";
    }
    if (includeSymbols) {
      pool += "!@#$%^&*()";
    }
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      newPassword += pool[randomIndex];
    }
    setPassword(newPassword);
  }

  const handlePasswordLength = (event) => {
    getRandomPassword(event.target.value);
  };

  const handleCopy = () => {
    if (password.length != 0) {
      try {
        navigator.clipboard.writeText(password);
        // alert("Text copied successfully!");
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (error) {
        alert("Some error occured in copying. please copy manually!");
      }
    }
  };

  useEffect(() => {
    getRandomPassword(password.length || initialPasswordLength);
  }, [includeNumbers, includeSymbols]);

  return (
    <>
      {isCopied && <CopyAlert />}
      <div className="PasswordGenerator">
        <div className="inputBox">
          <textarea
            name="password"
            id="password"
            value={password}
            readOnly
          ></textarea>
          <button className="copyBtn" onClick={handleCopy}>
            copy
          </button>
        </div>
        <div className="customizationBox">
          <Box sx={{ width: 200 }}>
            <Slider
              defaultValue={initialPasswordLength}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={handlePasswordLength}
            />
          </Box>
          <span>Length {password.length}</span>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`Numbers`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`Numbers`}
                  label={`Numbers`}
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                />
              </div>
            ))}
          </Form>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`Symbols`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`Symbols`}
                  label={`Symbols`}
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols(!includeSymbols)}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
