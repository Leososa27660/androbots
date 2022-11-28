import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.jsx';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
    <App />
  </React.StrictMode>
  
);



export default function App() {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}