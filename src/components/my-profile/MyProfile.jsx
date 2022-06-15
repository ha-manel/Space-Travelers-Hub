import './myProfile.css';
import React from 'react';
import ReservedDragons from './ReservedDragons';
import JoinedMissions from './JoinedMissions';

const MyProfile = () => (
  <div id="profile-section">
    <ReservedDragons />
    <JoinedMissions />
  </div>
);

export default MyProfile;
