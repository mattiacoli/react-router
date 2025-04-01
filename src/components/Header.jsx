import { NavLink } from "react-router-dom";

export default function Header() {

  const menu = [
    {
      id: 1,
      path: "/",
      text: 'Home'
    },
    {
      id: 2,
      path: "/about",
      text: 'Chi Siamo'
    },
    {
      id: 3,
      path: "/posts",
      text: 'Posts'
    }

  ]


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 mb-2">
        <a className="navbar-brand" href="/">
          React<b>Routing</b>
        </a>
        <div className="collapse navbar-collapse justify-content-end">

          <ul className="navbar-nav">
            {menu.map(item => (
              <li key={item.id} className="nav-item">
                <NavLink className="nav-link" to={item.path}>{item.text}</NavLink>
              </li>
            ))}
          </ul>

        </div>
      </nav>
    </header>

  )
}