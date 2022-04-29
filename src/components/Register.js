import React, { useState } from "react";
import "../register.css";
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

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onChangeFullname = (e) => {
    const value = e.target.value;
    setFullname(value);
  };

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onChangePasswordConfirm = (e) => {
    const value = e.target.value;
    setPasswordConfirm(value);
  };

  return (
    <div id="register" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col className="col-md-5 d-md-block d-lg-block col-sm-12 d-flex d-sm-flex justify-content-center">
            <Card className="border-0">
              <CardBody>
                <CardTitle>
                  <h1>Register</h1>
                </CardTitle>

                <Form inline autoComplete="off">
                  <FormGroup floating>
                    <Input
                      id="fullname"
                      name="fullname"
                      placeholder="Full name"
                      type="text"
                      value={fullname}
                      onChange={onChangeFullname}
                    />
                    <Label for="fullname">Full name</Label>
                  </FormGroup>{" "}
                  <FormGroup floating>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={username}
                      onChange={onChangeUsername}
                    />
                    <Label for="email">Email</Label>
                  </FormGroup>{" "}
                  <FormGroup floating>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={onChangePassword}
                    />
                    <Label for="password">Password</Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="passwordConfirm"
                      name="passwordConfirm"
                      placeholder="Confirm Password"
                      type="password"
                      value={passwordConfirm}
                      onChange={onChangePasswordConfirm}
                    />
                    <Label for="passwordConfirm">Confirm Password</Label>
                  </FormGroup>
                  <Button id="submit-register">Register</Button>
                </Form>

                <div className="text-center or">
                  <span>or</span>
                </div>

                <div id="social-login">
                  <Button>Google</Button>
                  <Button>Facebook</Button>
                </div>

                <div id="link-log">
                  You have an account? <Link to="/">Login Now</Link>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-md-7 d-md-block d-sm-none d-none">
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

export default Register;
