import { RouterProvider } from 'react-router-dom';
import router from 'root/routes';
import './App.css';
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinisicElements {
      'lord-icon': { me: string };
    }
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
