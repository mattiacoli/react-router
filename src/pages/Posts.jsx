
import PostsMain from '../components/posts/PostsMain'

export default function Posts() {


  return (

    <>

      <div className="container mt-4">

        <h1 className="text-white">Posts</h1>

        <main id="posts_main">
          <div className="row">
            <PostsMain />


          </div>
        </main>


      </div>
    </>
  )
}