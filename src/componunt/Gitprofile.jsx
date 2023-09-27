import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import Loading from './Loading ';
import UserInfo from './UserInfo';
import toast from 'react-hot-toast';

function Gitprofile() {
  const [username, setUsername] = useState('surwaseonkar1512');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username) {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
            
          } else {
            toast.error("User not found")
            
          }
        })
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error(error);
          setUserData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <InputForm username={username} setUsername={setUsername} handleSubmit={handleSubmit} />
      {loading && <Loading />}
      {userData && !loading && <UserInfo userData={userData} />}
    </div>
  );
}

export default Gitprofile;
