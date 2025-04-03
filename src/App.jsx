import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AlertProvider } from "./contexts/AlertContext"
import DefaultLayout from './layouts/DefaultLayout'
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import PostDetail from "./pages/PostDetail"
import NotFound from "./pages/NotFound"


function App() {


  return (
    <>
      <AlertProvider>

        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/posts" Component={Posts} />
              <Route path="/posts/:id" Component={PostDetail} />
              <Route path="/*" Component={NotFound} />


            </Route>
          </Routes>

        </BrowserRouter>
      </AlertProvider>





    </>
  )
}

export default App
