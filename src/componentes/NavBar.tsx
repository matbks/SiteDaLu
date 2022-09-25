import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from './Card'

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container> 
        <Card/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link
            //  style={{ position: 'relative', fontSize:25}}
             href="#link">Comprar</Nav.Link>
            <NavDropdown
            //  style={{ position: 'relative', left: 20, fontSize:25}} 
             title="Cadastro" id="basic-nav-dropdown">
              <NavDropdown.Item
            //   style={{ position: 'relative', fontSize:20}} 
              href="cadastro">Cadastro</NavDropdown.Item>
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