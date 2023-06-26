import { Provider } from 'react-redux';
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import Home from './routes/Home';
import Layout from './routes/Layout';
import Details from './routes/Details';
import './App.css';
import store from './redux/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<Home />} path="/" />
      <Route element={<Details />} path="/" />
    </Route>,
  ),
);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
