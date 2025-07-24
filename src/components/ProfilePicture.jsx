import React, { useState, useRef, useEffect } from 'react';
import './ProfilePicture.css';

const DEFAULT_AVATAR = '/default-avatar.png';

function ProfilePicture() {
  return (
    <div className="profile-picture-wrapper">
      <img
        src={DEFAULT_AVATAR}
        alt="Profile avatar"
        className="profile-avatar"
      />
      <label
        htmlFor="avatar-upload"
        className="upload-label"
        tabIndex={0}
        role="button"
        aria-label="Upload new profile picture"
      >
        Upload Picture
      </label>
      <input
        type="file"
        id="avatar-upload"
        className="file-input"
        accept="image/*"
        aria-label="Choose profile picture"
      />
      <div className="error-message" role="alert"></div>
    </div>
  );
}

export default ProfilePicture;
