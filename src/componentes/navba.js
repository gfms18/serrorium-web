import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Navba = (props) => {

    

    return (
        <div>
            <Navbar  className="navba" expand="lg" variant="light">
                <Container className="centralizar-nav">
                    
                    <Navbar.Brand><span class="span-sessorium">Sessorium</span></Navbar.Brand>
                    <Navbar.Brand><span class="span-sessorium2">{props.titulo}</span></Navbar.Brand>
                    <Navbar.Brand></Navbar.Brand>
                    

                </Container>
            </Navbar>
        </div>

    )
}

export default Navba;