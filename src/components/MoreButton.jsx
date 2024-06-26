import { useState } from "react"
import PostContent from '../components/PostContent'
// /**
//  * @param {{ post: any }} props
//  */


const query = `query MyQuery($cursor: String!, $size: Int!) {
    postsConnection(after:$cursor, first:$size,  orderBy: createdAt_DESC) {
        postsArray:edges {
          cursor
          post: node {
            content {
              html
            }
            id
            createdAt
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
}`




function MoreButton({currentCursor, size=1, ENDPOINT}) {

    const [posts, setPosts] = useState([])
    const [cursor, setCursor] = useState(currentCursor)
    const [hasNext, setHasNext] = useState(true)
    const [loading, setLoading] = useState(false)

    const getMore = async () => {
        setLoading(true)
        const response = await fetch(
            ENDPOINT,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  query: query,
                  variables: {
                      size: size,
                      cursor: cursor
                  }
              }
          )});


        const json = await response.json();
        const { data } = json
        const { postsArray, pageInfo } = data.postsConnection

        setPosts([...posts, ...postsArray])
        setCursor(pageInfo.endCursor)
        setHasNext(pageInfo.hasNextPage)

        setLoading(false)
      }


    return (
        <>
        {posts.map((post) => (
            <div key={post.cursor} className="text-md accent-colour max-w-4xl mb-6 p-6 rounded-3xl">
                <PostContent post={post.post} />
            </div>
        ))}


        {loading && <div className="bg-accent-colour mb-6 p-6 rounded-3xl text-center">Loading...</div>}
        {hasNext && <button className="bg-accent-colour mb-6 p-6 rounded-3xl" onClick={getMore}>Get More </button>}


        </>

    )

}



export default MoreButton
