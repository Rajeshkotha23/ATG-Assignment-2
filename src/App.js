import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import UserDetails from './components/userDetails';
import UserList from './components/userList';
import './App.css';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async (userId) => {
      try {
        const response = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${userId}`);
        console.log('API Response:', response.data);
        setSelectedUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    if (selectedUser && selectedUser.id) {
      fetchUserDetails(selectedUser.id);
    }
  }, [selectedUser]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className='menu'>
      <Router>
        <div className="container">
          <div className="side-by-side">
            <UserList onSelectUser={handleSelectUser} />
            <div className="details-container">
               <UserDetails selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
