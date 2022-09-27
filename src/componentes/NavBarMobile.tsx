import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from './Card'
import React from 'react'


function BasicExample() {
  const [width, setWidth] = React.useState(window.innerWidth);
  let wid: number = width;
  return (
    <Navbar bg="light" expand="lg" fixed="top" style={{
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      position: 'fixed',
      width: '100%',
      right: '8px'
    }}
    >
      <Container >
        <Card width={width} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-center" >
          <Nav className=" row justify-content-center">
            <form
              className="container-fluid justify-content-center mt-3"
              style={{ fontSize: 24, position: 'relative' }}
            >
              <a href='/cadastro'>
                <button
                  className="btn btn-outline-success me-2 btn-lg"
                  type="button"
                  style={{
                    fontSize: 24,
                    position: 'relative',
                    width: '100%'
                  }}
                >Login</button>
              </a>
            </form>

            <form
              className="container-fluid justify-content-center mt-3"
              style={{ fontSize: 24, position: 'relative' }}
            >
              <a href="/cadastro">
                <button
                  className="btn btn-outline-success me-2 btn-lg"
                  type="button"

                  style={{
                    fontSize: 24,
                    position: 'relative',
                    width: '100%'
                  }}

                >Cadastro</button>
              </a>
            </form>

            <form
              className="container-fluid justify-content-center mt-3"
              style={{ fontSize: 24, position: 'relative' }}

            >
              <a href="/comprar">
                <button
                  className="btn btn-outline-success me-2 btn-lg"
                  type="button"

                  style={{
                    fontSize: 24,
                    position: 'relative',
                    width: '100%'
                  }}
                >Comprar</button>
              </a>
            </form>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function calcHalfWidth() {

  const [width, setWidth] = React.useState(window.innerWidth);

}

export default BasicExample;