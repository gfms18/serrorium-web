import React from 'react';
import { Form, Container, Row, Col } from "react-bootstrap";
import Divimagem from "./divimagem.js";
import { Link } from 'react-router-dom';




const Div1login = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <div class="container">
                        <Divimagem />
                        <div className="descer">

                            <div class="form-padding">
                                <Form className="form">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="email" className="input" placeholder="Login" required />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="password" className="input" placeholder="Senha" required />
                                    </Form.Group>

                                    <div class="botao">
                                        <button>
                                            Entrar
                                        </button>
                                    </div>
                                </Form>
                                <div class="a">
                                    <Link to="loginadministrador" type="button" className="a">Você é um administrador?</Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Div1login;

