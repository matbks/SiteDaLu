import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from './Card'
import React from 'react'


function BasicExample() {

  const [width, setWidth] = React.useState(window.innerWidth);

  let wid: number = width;

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container >
        <Card width={width} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{}}>
          <Nav className="me-auto" style={{ marginLeft: 45 }}>
            {/* <Nav.Link
              //  style={{ position: 'relative', fontSize:25}}
              href="Comprar" style={{ fontSize: 24, position: 'relative', left: 60 }}> Comprar </Nav.Link> */}
            <form className="container-fluid justify-content-start ">
              <button className="btn btn-outline-success me-2 btn-lg " type="button">Comprar</button>
            </form>
            <NavDropdown
              //  style={{ position: 'relative', left: 20, fontSize:25}} 
              title="Cadastro" id="basic-nav-dropdown" style={{ fontSize: 20, position: 'relative', left: 30, top: 2 }}>
              <NavDropdown.Item
                //   style={{ position: 'relative', fontSize:20}} 
                href="cadastro"><h6>Cadastro</h6></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="login"><h6>Login</h6></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;