import { useEffect } from "react";
import { useMakeRequestMutation } from "./store/slice";

function Post() {
  const [makeRequest, { data, isError, isLoading }] = useMakeRequestMutation();
  const payload = {
    title: "New Post",
    body: "This is a new post.",
    userId: 1,
  };
  //useEffect
  useEffect(() => {
    makeRequest({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      payload: payload,
    });
  }, [makeRequest]); // Make sure to include makeRequest in the dependency array

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error creating post</p>;

  return (
    <>
      {data && (
        <div>
          <div>Id: {data.id}</div>
          <div>userId: {data.userId}</div>
          <div>Title: {data.title}</div>
          <div>Body: {data.body}</div>
        </div>
      )}
    </>
  );
}

export default Post;
