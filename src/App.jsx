import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Nav from './components/nav/Nav';
import MyProfile from './components/my-profile/MyProfile';
import Dragons from './components/dragons/Dragons';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import { fetchMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/rockets" />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
