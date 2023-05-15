import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userProgress, setUserProgress] = useState([]);

  useEffect(() => {
    // Fetch user progress data from the server or local storage
    // Update the userProgress state with the fetched data
    // Example: setUserProgress([...fetchedUserProgressData]);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Time Taken</th>
            <th>Solution Accuracy</th>
            {/* Add more columns as needed for additional progress data */}
          </tr>
        </thead>
        <tbody>
          {userProgress.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.timeTaken}</td>
              <td>{user.accuracy}</td>
              {/* Render additional progress data as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
