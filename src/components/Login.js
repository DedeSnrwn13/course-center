import React, { useState } from "react";
import "../login.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
const iconEye = require("../assets/img/icon-eye.png");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <div id="login" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col className="col-md-5">
            <div>
              <div>
                <h2 id="title-top">
                  Welcom back to <span>Course Center</span>
                </h2>
              </div>
              <Card className="border-0">
                <CardBody>
                  <CardTitle>
                    <h1>Login</h1>
                  </CardTitle>

                  <Form inline autoComplete="off">
                    <FormGroup floating>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={username}
                        onChange={onChangeUsername}
                      />
                      <Label for="exampleEmail">Email</Label>
                    </FormGroup>{" "}
                    <FormGroup floating>
                      <Label for="examplePassword">Password</Label>
                      <div className="input-group">
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="Password"
                          type="password"
                          value={password}
                          onChange={onChangePassword}
                        />

                        <div className="input-group-append">
                          <img
                            src={iconEye}
                            alt="icon eye"
                            id="mybutton"
                            onClick=""
                          />
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup check>
                      <div id="radio-check">
                        <Input type="checkbox" />{" "}
                        <Label check>Remember me</Label>
                      </div>
                      <div id="forgot-pw">
                        <Link to="#">Forgot Password?</Link>
                      </div>
                    </FormGroup>
                    <Button id="submit-login">Login</Button>
                  </Form>

                  <div id="link-reg">
                    Don’t have an account?{" "}
                    <Link to="/register">Get Started</Link>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col className="col-md-7">
            <div id="right">
              <img
                src="./illustration-right.png"
                alt="Illustration"
                id="illustration"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
