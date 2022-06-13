import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import MyProfile from './components/my-profile/MyProfile';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
