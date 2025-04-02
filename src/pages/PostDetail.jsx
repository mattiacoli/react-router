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
        console.log(data);

      })
  }, [id])

  const navigate = useNavigate()


  return (

    <main>
      {!post ? ('Loading') : (
        <>


          <div style={{ minHeight: '40vh', backgroundImage: `url(${apiUrl}${post.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

          </div>



          <div className="actions d-flex justify-content-between p-5">

            <button className="btn btn-primary" onClick={() => navigate('/posts')}>
              Go to Posts Index
            </button>

            <div className="pagination d-flex gap-2">
              <button className="btn btn-outline-primary">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                Prev
              </button>

              <button className="btn btn-outline-primary">
                Next
                <i class="fa fa-chevron-right" aria-hidden="true"></i>

              </button>

            </div>





          </div>




          <div className="details">
            <div className="mb-3">
              <div
                className="h-100 p-5 text-black bg-lighter">

                <h2 className="text-warning fw-bold mb-2">{post.title}</h2>
                <div className="tags d-flex gap-3 my-4">
                  {post.tags.map(tag => (
                    <span class="badge text-bg-success p-2">{tag}</span>
                  ))
                  }
                </div>
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