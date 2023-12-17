import React, { useState, useEffect } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './list.css';
import ClipLoader from "react-spinners/ClipLoader";

const UserList = ({ onSelectUser }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users");
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        // Simulate a delay to show the loading spinner
        const timeout = setTimeout(() => {
            fetchUsers();
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='list'>
            <div className='list-container' style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <div className="container mt-4 list">
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center">
                           <ClipLoader
        color={"#e53507"}
        loading={loading}
        
        size={150}
        
      />
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col">
                                <ListGroup>
                                    <h2>Users List</h2>
                                    {users.length > 0 ? (
                                        users.map(user => (
                                            <div key={user.id} className="mb-3">
                                                <ListGroup.Item
                                                    action
                                                    onClick={() => onSelectUser(user)}
                                                    className="border bg-secondary text-white"
                                                    style={{
                                                        borderRadius: '10px',
                                                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '10px',
                                                    }}
                                                >
                                                    <img
                                                        src={user.avatar}
                                                        alt={user.profile.firstName}
                                                        width="30"
                                                        height="30"
                                                        className="mr-3"
                                                        style={{ borderRadius: '50%' }}
                                                    />
                                                    <div>
                                                        <div className="mb-1">{user.profile.firstName}</div>
                                                        <div>{user.profile.lastName}</div>
                                                    </div>
                                                </ListGroup.Item>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col">
                                            <p className="text-danger">No data to show</p>
                                        </div>
                                    )}
                                </ListGroup>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserList;
