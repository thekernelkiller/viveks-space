const PostContent = ({ post }) => {
  const { content, title, slug, createdAt } = post;

  const dateString = new Date(createdAt).toLocaleDateString("en-US", {
    dateStyle: "full",
  });
  const timeString = new Date(createdAt).toLocaleTimeString("en-US", {
    timeStyle: "short",
  });

  return (
    <>
      <h2 className="text-2xl text-center font-bold mb-3">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content.html }} className="mb-2"></div>
      <time dateTime="{createdAt}">
        <a href={`/posts/${slug}`} className="text-md text-center underline">
          {dateString} at {timeString}
        </a>
      </time>
    </>
  );
};

export default PostContent;
