import Page from 'components/sharedComponents/navbar';
import { createBrowserRouter } from 'react-router-dom';
import './routes.scss';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Page>
        {/* <Card className='puff-in-center'>
          <Card.Header>Home</Card.Header>
          <Card.Body>
            Home content goes here
            <iframe
              src='https://giphy.com/embed/7VzgMsB6FLCilwS30v'
              width='480'
              height='480'
              frameBorder='0'
              className='giphy-embed'
              allowFullScreen
            ></iframe>
          </Card.Body>
        </Card> */}
      </Page>
    ),
  },
  {
    path: '/work',
    element: (
      <Page>
        {/* <Card className='roll-in-left'>
          <Card.Header>Work</Card.Header>
          <Card.Body>Work content goes here</Card.Body>
        </Card> */}
      </Page>
    ),
  },
  {
    path: '/resume',
    element: (
      <Page>
        {/* <Card className='puff-in-center'>
          <Card.Header>Resume</Card.Header>
          <Card.Body>Resume content goes here</Card.Body>
        </Card> */}
      </Page>
    ),
  },
  {
    path: '/about',
    element: (
      <Page>
        {/* <Card className='puff-in-center'>
          <Card.Header>About</Card.Header>
          <Card.Body>About content goes here</Card.Body>
        </Card> */}
      </Page>
    ),
  },
]);
export default router;
