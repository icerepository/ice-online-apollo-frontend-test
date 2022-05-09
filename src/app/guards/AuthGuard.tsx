import React from 'react';

const AuthGuard: React.FC<React.PropsWithChildren<{}>> = function ({ children }) {
  return <>{children}</>;
};

export default AuthGuard;
