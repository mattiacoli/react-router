import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



export default function PostDetail() {

  const [post, setPost] = useState()

  const apiUrl = "http://localhost:3000"

  const { id } = useParams()

  useEffect(() => {
    fetch(`${apiUrl}/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
      })
  }, [])


  return (

    <main>
      {!post ? ('Loading') : (
        <>


          <div className="jumbotron">
            <div className="mb-3">
              <div
                className="h-100 p-5 text-black bg-light">

                <h2>{post.title}</h2>
                <p>
                  {post.content}
                </p>
              </div>
            </div>
          </div>

        </>

      )}
    </main >
  )

}