import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#rockets">
            <img
              alt="Cool logo."
              src={logo}
              width="36"
              height="36"
              className="d-inline-block align-center"
            />
            {' '}
            <span className="title">Space Travelers&apos; Hub</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
