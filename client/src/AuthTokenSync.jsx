import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { setAuthToken } from './lib/api';

// Keeps the shared axios instance's Authorization header in sync with the
// current Clerk session, so protected API routes accept requests from the client.
const AuthTokenSync = () => {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const sync = async () => {
      if (isSignedIn) {
        const token = await getToken();
        setAuthToken(token);
      } else {
        setAuthToken(null);
      }
    };
    sync();
  }, [isSignedIn, getToken]);

  return null;
};

export default AuthTokenSync;
