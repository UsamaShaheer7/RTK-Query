import "./App.css";
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";

function App() {
  return (
    <>
      <div>this is get request </div>
      <Get />
      <div>this is post request</div>
      <Post />
      <div>this is put request</div>
      <Put />
    </>
  );
}

export default App;
