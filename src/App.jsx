import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './layouts/DefaultLayout'
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import PostDetail from "./pages/PostDetail"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/posts" Component={Posts} />
            <Route path="/posts/:id" Component={PostDetail} />

          </Route>
        </Routes>

      </BrowserRouter>





    </>
  )
}

export default App
