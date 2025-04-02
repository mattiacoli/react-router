import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Posts() {
  const [posts, setPosts] = useState([])

  const apiUrl = "http://localhost:3000"


  useEffect(() => {

    fetch(`${apiUrl}/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        console.log(data);

      })

  }, [])

  return (
    <>

      <div className="container mt-4">

        <h1 className="text-white">Posts</h1>

        <main id="posts_main">
          <div className="row">
            {posts.map(post => (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card h-100 d-flex" style={{ minHeight: '350px' }}>
                  <img className="card-img-top" src={`${apiUrl}${post.image}`} alt={post.title} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h4 className="card-title mb-4 ">{post.title}</h4>

                    <Link to={`/posts/${post.id}`} className="btn btn-outline-primary">Show Post</Link>

                  </div>
                </div>
              </div>
            ))}


          </div>
        </main>


      </div>
    </>
  )
}