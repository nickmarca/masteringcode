import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigateAfterLogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as { from?: Location };
  const from = locationState?.from?.pathname || '/';

  return () => navigate(from, { replace: true });
};
