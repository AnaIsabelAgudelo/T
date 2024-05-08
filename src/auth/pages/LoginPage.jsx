import { Form, Button } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";

const initForm = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { login, errorMessage } = useContext(AuthContext)

  const navigate = useNavigate();

  const { email, password, onInputChange } = useForm(initForm);

  const onLogin = async (event) => {
    event.preventDefault();

    const isValidLogin = await login(email, password);

    if (isValidLogin) {
      const lastPath = localStorage.getItem('lastPath') || "/"

      navigate(lastPath, {
        replace: true,
      });
    }  
   
  };

  return (
    <div
      style={{
        backgroundColor: "#EF1C1C",
        height: "100vh",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img src={Logo} style={{ width: "380px", height: "380px" }} />
        <Form style={{ width: "300px", margin: "0 auto" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              style={{
                fontSize: "20px",
                borderRadius: "50px",
                backgroundColor: "#ffffff",
                textAlign: "center",
                padding: "10px",
              }}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="USER NAME"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control
              style={{
                fontSize: "20px",
                borderRadius: "50px",
                backgroundColor: "#ffffff",
                textAlign: "center",
                padding: "10px",
              }}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="PASSWORD"
            />
          </Form.Group>
          <div style={{ marginBottom: "40px" }}>
            <Button
              variant="warning"
              type="submit"
              style={{
                color: "red",
                backgroundColor: "yellow",
                width: "35%",
                borderRadius: "50px",
                fontFamily: "sans-serif",
              }}
              onClick={onLogin}
            >
              LOGIN
            </Button>
            <br />
            {!errorMessage ? null : 
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            }
          </div>
        </Form>
      </div>
    </div>
  );
};
