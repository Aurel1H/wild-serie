import { Link, NavLink, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h1 className="logo">Wild Series</h1>
        </Link>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/categories">Catégories</NavLink>
          </li>
          <li>
            <NavLink to="/programs">Programmes</NavLink>
          </li>
        </ul>
      </nav>

      <main className="text-box">
        <Outlet />
      </main>
    </>
  );
}

export default App;
