// 상단 네브바에 대한 components

import axios from 'axios';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

function TopNav() {
  let navigate = useNavigate();

  let result = useQuery('작명', () =>
    axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data;
    }),
  );

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
          <Nav.Link
            onClick={() => {
              navigate('/home');
            }}
            style={{ color: 'white' }}
          >
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
          <Nav.Link>
            {result.isLoading && '로딩중'}
            {result.error && '에러'}
            {result.data && result.data.name}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { TopNav };
