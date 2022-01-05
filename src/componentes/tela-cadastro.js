import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Navba from "./navba";



const TelaCadastro = () => {

    return (
        <div class="espaco">
            
            <Navba/>
            <Container>
                <Row>
                    <Col></Col>
                    <Col >
                       
                        <Form className="form-espacar">
                            <h1 class="titulo">Informações básicas</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>PIKA:</Form.Label>
                                <Form.Control type="text" id="camponome" placeholder="Digite o nome da escola" required />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Digite o Email da escola" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Telefone:</Form.Label>
                                <Form.Control type="text" placeholder="Digite o telefone da escola" required />
                                
                            </Form.Group>

                           
                        

                        <div class="linha"></div>

                        <h1 class="titulo">Endereço da instituição</h1>
                        
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>CEP:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite o CEP da escola" required />

                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Estado:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite o estado da escola" required />

                                    </Form.Group>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Label>Cidade:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite a cidade da escola" required/>

                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Bairro:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite o bairro da escola" required />

                                    </Form.Group>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3 endereco" controlId="formBasicEmail">
                                        <Form.Label>Endereço:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite o endereço da escola" required />

                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Número:</Form.Label>
                                        <Form.Control type="text" placeholder="N° da escola" required/>

                                    </Form.Group>

                                </Col>

                            </Row>
                           
                        
                        
                        <div class="linha"></div>
                        <h1 class="titulo">Informações importantes</h1>
                        
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >CNPJ:</Form.Label >
                                <Form.Control type="text" placeholder="Digite o CNPJ"  required/>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >Senha:</Form.Label>
                                <Form.Control type="password" placeholder="Digite a senha" id="senha" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Confirmar senha:</Form.Label>
                                <Form.Control type="password" placeholder="Confirme a senha" id="confirmasenha" required />
                                
                            </Form.Group>
                            <div class="centralizarbotao">


                                <button type="submit"> Enviar </button>
                                
                            </div>
                            
                          
                        </Form>


                    </Col>
                    <Col></Col>
                </Row>
            </Container>


        </div>
    )
}

export default TelaCadastro;