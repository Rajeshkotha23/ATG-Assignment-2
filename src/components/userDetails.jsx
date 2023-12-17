import React from 'react';
import './user.css';

const UserDetails = ({ selectedUser }) => {
    return (
        <div className='details'>
        <div className="container mt-4">
            {selectedUser ? (
                <div className="card border-info"> 
                    <div className="card-header bg-info text-white"> 
                        <h3 className="card-title">User Details</h3>
                    </div>
                    <div className="card-body">
                        <img src={selectedUser.avatar} alt={selectedUser.name} width="100" height="100" className="rounded-circle mb-3" />
                        <p className="card-text"><strong>Name:</strong> {selectedUser.name}</p>
                        <p className="card-text"><strong>Email:</strong> {selectedUser.email}</p>
                    </div>
                </div>
            ) : (
                <p className="alert alert-info mt-3">Select a user to view details</p>
            )}
        </div>
        </div>
    );
};

export default UserDetails;
