import React from 'react';

const rootUrl = 'https://api.github.com'
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  return <GithubContext.Provider value={''}>
    {children}
  </GithubContext.Provider>
}

export { GithubProvider, GithubContext };
