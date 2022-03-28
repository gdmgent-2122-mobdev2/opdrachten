import { useEffect, useState } from "react";

const createBasicAuth = () => {
  const auth = `${process.env.REACT_APP_GITHUB_USERNAME}:${process.env.REACT_APP_GITHUB_TOKEN}`;
  return "Basic " + btoa(auth);
};

const useGithubApi = (path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCurrent = true;
    setData(null);
    setError(null);
    fetch(`https://api.github.com${path}`, {
      headers: {
        Authorization: createBasicAuth(),
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((data) => isCurrent && setData(data))
      .catch((error) => isCurrent && setError(String(error)));
    return () => (isCurrent = false);
  }, [path]);

  const isLoading = !data && !error;

  return {
    isLoading,
    data,
    error,
  };
};

export default useGithubApi;
