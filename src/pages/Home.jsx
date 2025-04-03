import { useEffect, useState } from 'react'
import { useAlert } from '../contexts/AlertContext'

export default function Home() {

  const [posts, setPosts] = useState([])

  const apiUrl = "http://localhost:3000/posts"

  const { setAlert } = useAlert()


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

  useEffect(() => {
    const interval = setInterval(() => {
      const activeItem = document.querySelector('#carousele .carousel-item.active');
      const nextItem = activeItem?.nextElementSibling || document.querySelector('#carousele .carousel-item:first-child');

      activeItem?.classList.remove('active');
      nextItem?.classList.add('active');
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div id="home_jumbo" className="jumbotron border rounded mx-2">
        <div className="mb-3">
          <div
            className="h-100 p-5 text-black">

            <h2>Welcome! </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus omnis dolor consequuntur hic veniam enim, perferendis veritatis, sint libero quo, asperiores inventore quas maxime. Dicta quasi alias assumenda nostrum!
            </p>
          </div>
        </div>
      </div>

      <main id="home_main" className="py-4">

        <div className="container">

          <div id="carousele" className="carousel slide">

            <div className="carousel-inner p-3">
              {posts.map((post, index) => (
                <div key={post.id} className={`carousel-item ${index === 0 ? 'active' : ''} border rounded`}>
                  <img src={`http://localhost:3000${post.image}`} className="d-block w-100" alt={post.title} />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                  <h4 className='text-white m-3'>{post.title}</h4>
                </div>
              ))}
            </div>
          </div>


        </div>


      </main>

    </>
  )
}