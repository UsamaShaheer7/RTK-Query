import { useEffect } from "react";
import { useMakeRequestMutation } from "./store/slice";

function Put() {
  const [makeRequest, { data, isError, isLoading }] = useMakeRequestMutation();
  const payload = {
    title: "Updated Post",
    body: "This post has been updated.",
    userId: 1,
  };
  useEffect(() => {
    makeRequest({
      url: "https://jsonplaceholder.typicode.com/posts/1", // Replace with the actual post ID
      method: "PUT",
      payload: payload,
    });
  }, [makeRequest]); // Make sure to include makeRequest in the dependency array

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error updating or deleting post</p>;

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

export default Put;
