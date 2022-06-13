import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import MyProfile from './components/my-profile/MyProfile';
import Dragons from './components/dragons/Dragons';
import Rockets from './components/rockets/Rockets';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
