import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../../atoms/user-atom';

const RequireAuth: React.FC = ({ children }) => {
  const auth = useRecoilValue(authState);
  const location = useLocation();

  if (auth.status === 'WAITING') {
    return null;
  }

  if (auth.status === 'NON-USER') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children as JSX.Element;
};

export const requireAuth =
  <TProps = {},>(
    ProtectedComponent: React.JSXElementConstructor<TProps>,
  ): React.FC<TProps> =>
  (props: TProps) =>
    (
      <RequireAuth>
        <ProtectedComponent {...props} />
      </RequireAuth>
    );

export default RequireAuth;
