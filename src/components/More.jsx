import React, { useState } from "react";
// /**
//  * @param {{ post: any }} props
//  */

import PostContent from "./PostContent";
import { postsFragment } from "../../fragments/posts";
const query = `query MyQuery($cursor: String!, $size: Int!) {
    postsConnection(after:$cursor, first:$size,  orderBy: createdAt_DESC) {
        ${postsFragment}
      }
}`;

const More = ({ currentCursor, size = 1, ENDPOINT = "" }) => {
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(currentCursor);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);

  const getMore = async () => {
    setLoading(true);
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: {
          size: size,
          cursor: cursor,
        },
      }),
    });
    const json = await response.json();
    const { data } = json;
    const { postsArray, pageInfo } = data.postsConnection;

    setPosts([...posts, ...postsArray]);
    setCursor(pageInfo.endCursor);
    setHasNext(pageInfo.hasNextPage);
    setLoading(false);
  };
  
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.cursor}
          className="text-md bg-slate-50 max-w-4xl mb-6 p-6 font-serif rounded-3xl"
        >
          <PostContent post={post.post} />
        </div>
      ))}
      {loading && (
        <div className="text-md bg-slate-50 max-w-4xl mb-6 p-6 font-serif rounded-3xl text-center">
          Loading...
        </div>
      )}
      {hasNext && (
        <button className="text-md bg-slate-50 mb-6 p-6 font-serif rounded-3xl" onClick={getMore}>
          Get More{" "}
        </button>
      )}
    </>
  );
};

export default More;
