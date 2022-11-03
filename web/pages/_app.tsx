import type { AppType } from "next/app";
import { UserProvider,  useUser } from "@auth0/nextjs-auth0";
import { useRouter } from 'next/router'

import "../style";

const ProtectedRoute = ({ children }) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter()
  const isReady = router.isReady;
  
  if (!isReady || isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    router.push('/api/auth/login')
    return <div>Redirecting...</div>;
  }
  return children;
};

const App: AppType = ({ Component, pageProps, router }) => {
  return (
    <UserProvider>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </UserProvider>
  );
};
export default App;
