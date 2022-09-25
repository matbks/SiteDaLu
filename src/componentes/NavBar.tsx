import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from './Card'
import React from 'react'



function BasicExample() {
  const [width, setWidth] = React.useState(window.innerWidth);
  let wid:number = width;
  return (
    <Navbar bg="light" expand="lg"  fixed="top">
      <Container > 
        <Card width={ width }/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" style={{ marginLeft:10}}> 
            <Nav.Link
            //  style={{ position: 'relative', fontSize:25}}
             href="Comprar"><h4>Comprar</h4></Nav.Link>
            <NavDropdown
            //  style={{ position: 'relative', left: 20, fontSize:25}} 
             title="Cadastro" id="basic-nav-dropdown">
              <NavDropdown.Item
            //   style={{ position: 'relative', fontSize:20}} 
              href="cadastro"><h4>Cadastro</h4></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
              href="login">Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;