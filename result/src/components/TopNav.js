// 상단 네브바에 대한 components

import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TopNav() {
  let navigate = useNavigate();
  return (
    <Navbar
      style={{
        backgroundColor: 'rgb(139, 95, 241)',
      }}
    >
      <Container>
        <Navbar.Brand
          style={{ color: 'white' }}
          onClick={() => {
            navigate('/');
          }}
        >
          Louis Automation Result
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate('/manual');
            }}
            style={{ color: 'white' }}
          >
            Manual
          </Nav.Link>
          <Nav.Link href="/home" style={{ color: 'white' }}>
            React Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/detail/0');
            }}
            style={{ color: 'white' }}
          >
            Detail
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/cart');
            }}
            style={{ color: 'white' }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { TopNav };
