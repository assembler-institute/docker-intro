import { RouterProvider } from 'react-router';
import { router } from './routes/router';
import { AuthProvider } from './context/AuthContext/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider
          router={router}
          fallbackElement={<div>Loading...</div>}
        />
      </AuthProvider>
    </>
  );
}

export default App;
