import { createContext, useContext, useState, useEffect } from "react";

const PostsContext = createContext()

function PostsProvider({ children }) {


  const [posts, setPosts] = useState([])

  const apiUrl = "http://localhost:3000/posts"


  useEffect(() => {

    fetch(`${apiUrl}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        console.log(data);

      })
      .catch(err => {

        setAlert({
          type: 'error',
          message: err.message
        })

      })

  }, [])

  return (
    <PostsContext.Provider value={{ posts, setPosts, apiUrl }}>
      {children}
    </PostsContext.Provider>
  )


}

function usePostsContext() {
  const context = useContext(PostsContext)
  return context
}

export { PostsProvider, usePostsContext }

