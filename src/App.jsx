import React from 'react';
import ProfilePicture from './components/ProfilePicture.jsx';

function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <section style={{ background: '#f3f6fa', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 9px #ddd' }}>
        <h2>Profile Settings</h2>
        <ProfilePicture />
      </section>
    </main>
  );
}

export default App;
