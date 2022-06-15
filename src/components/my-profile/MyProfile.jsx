import './myProfile.css';
import React from 'react';
import JoinedMissions from './JoinedMissions/JoinedMissions';
import ReservedRockets from './ReservedRockets/ReservedRockets';
import ReservedDragons from './ReservedDragons/ReservedDragons';

const MyProfile = () => (
  <div id="profile-section">
    <JoinedMissions />
    <ReservedRockets />
    <ReservedDragons />
  </div>
);

export default MyProfile;
