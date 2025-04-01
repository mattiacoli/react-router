import { useEffect, useState } from "react"

export default function Posts() {
  const [posts, setPosts] = useState([])

  const apiUrl = "http://localhost:3000"


  useEffect(() => {

    fetch(`${apiUrl}/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })

  }, [])




  return (
    <>

      <div className="container mt-4">

        <h1>Posts</h1>

        <main>
          <div className="row">
            <div className="col-auto">
              {posts.map(post => (
                <div class="card" key={post.id}>
                  <img class="card-img-top" src={`${apiUrl}${post.image}`} alt={post.title} />
                  <div class="card-body">
                    <h4 class="card-title">{post.title}</h4>
                    <p class="card-text">{post.content}</p>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </main>


      </div>
    </>
  )
}