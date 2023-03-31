import React, { useEffect, useState } from 'react';

const useToken: Function = (): [string] => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    setToken(window.localStorage.getItem('token') || '');
  }, []);

  return [token];
};

export default useToken;
