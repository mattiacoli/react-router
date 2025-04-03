import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



export default function PostDetail() {

  const [post, setPost] = useState()

  const apiUrl = "http://localhost:3000"

  const { id } = useParams()

  const nextId = parseInt(id) + 1
  const prevId = parseInt(id) - 1


  useEffect(() => {
    fetch(`${apiUrl}/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)

      })
  }, [id])

  const navigate = useNavigate()


  return (

    <main>
      {!post ? ('Loading') : (

        <>


          {/* cover image */}
          <div style={{ minHeight: '40vh', backgroundImage: `url(${apiUrl}${post.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

          </div>


          <main id="post_main">

            <div className="actions d-flex justify-content-between p-5">

              <button className="btn btn-outline-primary" onClick={() => navigate('/posts')}>
                Go to Posts Index
              </button>


              <div className="pagination d-flex gap-3">

                {prevId > 0 && (
                  <button className="btn btn-outline-primary"
                    onClick={() => navigate(`/posts/${prevId}`)}>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    Prev
                  </button>
                )}
                {nextId <= 5 && (
                  <button className="btn btn-outline-primary"
                    onClick={() => navigate(`/posts/${nextId}`)}>
                    Next
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                )}
              </div>
            </div>




            {/* Post Detail */}

            <div className="details">
              <div className="mb-3">
                <div
                  className="h-100 p-5 text-black bg-lighter">

                  <h2 className="text-black fs-1 fw-bold mb-2">{post.title}</h2>

                  {/* post tags */}
                  <div className="tags d-flex gap-3 my-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="badge text-bg-success p-2">{tag}</span>
                    ))
                    }
                  </div>
                  <p>
                    {post.content}
                  </p>
                </div>
              </div>
            </div>


          </main>


          {/* navigation Buttons */}

        </>

      )
      }
    </main >
  )

}