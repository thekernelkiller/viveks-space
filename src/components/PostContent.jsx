import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PostContent = ({ post, showExcerpt }) => {
  const { content, title, slug, createdAt } = post;

  const dateString = new Date(createdAt).toLocaleDateString("en-US", {
    dateStyle: "full",
  });
  const timeString = new Date(createdAt).toLocaleTimeString("en-US", {
    timeStyle: "short",
    hour12: false
  });

  return (
    <>
      {!showExcerpt && (
        <>
          <h2 className="text-2xl text-center font-bold mb-3">{title}</h2>
          <ReactMarkdown className="prose md:prose-md" remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </>
      )}
      <time dateTime={createdAt}>
        <a href={`/posts/${slug}`} className="text-md text-center underline">
          {dateString} at {timeString}
        </a>
      </time>
    </>
  );
};

export default PostContent;

// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

// const PostContent = ({ post }) => {
//   const { content, title, slug, createdAt } = post;

//   const dateString = new Date(createdAt).toLocaleDateString("en-US", {
//     dateStyle: "full",
//   });
//   const timeString = new Date(createdAt).toLocaleTimeString("en-US", {
//     timeStyle: "short",
//     hour12: false
//   });

//   return (
//     <>
//       <h2 className="text-2xl text-center font-bold mb-3">{title}</h2>
//       <ReactMarkdown className="prose md:prose-md" remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> 
//       <time dateTime="{createdAt}">
//         <a href={`/posts/${slug}`} className="text-md text-center underline">
//           {dateString} at {timeString}
//         </a>
//       </time>
//     </>
//   );
// };

// export default PostContent;
