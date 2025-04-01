import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <>
      <header>

        <nav className="navbar bg-primary p-4" data-bs-theme="dark">
          <div className="logo">
            Router<b>React</b>
          </div>


          <div className="links_nav">
            <ul className="nav gap-2">
              <li className="nav-item">
                <NavLink className='nav-item' to={'/'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/about'}>Chi Siamo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/posts'}>Posts</NavLink>
              </li>
            </ul>
          </div>
        </nav>


      </header>

    </>
  )
}