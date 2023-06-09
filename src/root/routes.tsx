import AboutPage from 'components/About';
import HomePage from 'components/Home';
import ProjectsPage from 'components/Projects';
import ResumePage from 'components/Resume';
import WorkPage from 'components/Work';
import { createBrowserRouter } from 'react-router-dom';
import './routes.scss';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/work',
    element: <WorkPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/resume',
    element: <ResumePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);
export default router;
