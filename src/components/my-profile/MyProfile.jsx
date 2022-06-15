import './myProfile.css';
import React from 'react';
import JoinedMissions from './JoinedMissions/JoinedMissions';
import ReservedRockets from './ReservedRockets/ReservedRockets';

const MyProfile = () => (
  <div id="profile-section">
    <JoinedMissions />
    <ReservedRockets />
  </div>
);

export default MyProfile;
