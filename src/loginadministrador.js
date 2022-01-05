import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";




const Loginadm = () => {
    return (
        <>
            
            <Container>
                <Row>
                    <Col>
                        <div>
                            <div class="container-administrador">
                                <div className="descer">
                                    <div>
                                        <h1 class="titulo">Sessorium</h1>
                                    </div>

                                    <div class="form-padding form-padding-administrador">
                                        <Form className="form form-administrador">
                                            <div class="frase">
                                                <h5 >Fazer login como administrador</h5>
                                            </div>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                                <Form.Control type="email" className="input" placeholder="Cnpj" required />

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
                                    </div>

                                    <div class="a">
                                        <Link to="/tela-cadastro">Registrar escola</Link>
                                    </div>

                                </div>
                            </div>
                        </div></Col>
                </Row>
            </Container>
        </>
       
    )
}

export default Loginadm