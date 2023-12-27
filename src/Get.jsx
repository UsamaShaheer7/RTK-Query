import { useEffect } from "react";
import { useMakeRequestMutation } from "./store/slice";

function Get() {
  const [makeRequest, { data, isError, isLoading }] = useMakeRequestMutation();

  useEffect(() => {
    // Invoke the mutation function with the parameters
    makeRequest({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    });
  }, [makeRequest]); // Make sure to include makeRequest in the dependency array

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users</p>;

  return (
    <>
      {data?.map((item) => (
        <div key={item.id}>
          <div>Id: {item.id}</div>
          <div>userId: {item.userId}</div>
          <div>Title: {item.title}</div>
          <div>Body: {item.body}</div>
        </div>
      ))}
    </>
  );
}

export default Get;
