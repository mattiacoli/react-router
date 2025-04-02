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

        <h1>Posts</h1>

        <main>
          <div className="row">
            {posts.map(post => (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img className="card-img-top" src={`${apiUrl}${post.image}`} alt={post.title} />
                  <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>

                    <Link to={`/posts/${post.id}`} className="btn btn-primary">Post Detail</Link>


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