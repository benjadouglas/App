import { useState, useEffect } from 'react';
// import { loginUser } from '../Api/Users';

const useUser = (credentials) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await loginUser(credentials);
      setUser(user);
    };

    if (credentials) {
      fetchUser();
    }
  }, [credentials]);

  return user;
};

export default useUser;