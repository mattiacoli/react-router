import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <>
      <header className="p-4">

        <nav className="d-flex justify-content-between" >
          <div className="logo">
            Router<b>React</b>
          </div>


          <div className="links_nav d-flex gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Chi Siamo</NavLink>
            <NavLink to="/posts">Posts</NavLink>

          </div>
        </nav>


      </header>

    </>
  )
}