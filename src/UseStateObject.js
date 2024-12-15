import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: '', age: '' });

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}

export default UserProfile;
