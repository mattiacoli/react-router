import { usePostsContext } from "../../contexts/PostsContext"

import PostCard from "./PostCard"


export default function PostsMain() {

  const { posts, apiUrl } = usePostsContext()

  return (
    <>

      {posts.map(post => (
        <PostCard key={post.id} post={post} apiUrl={apiUrl} />

      ))}



    </>
  )
}