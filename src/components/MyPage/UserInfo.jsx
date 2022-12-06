import { useDispatch, useSelector } from "react-redux";
import { getData, increment } from "../../store/counter/counterSlice";
import { fetchPosts } from "./../../store/posts/postSlice";

const UserInfo = () => {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const dispatch = useDispatch();
  console.log(count);
  // const increment = (count) => {
  //   dispatch(increment(count));
  // };
  return (
    <div>
      <p>리덕스에서 불러온 상수 : {count}</p>
      <p>
        리덕스에서 불러온 api데이터 : {status === "succeeded" && data}
        {status === "loading" && "loading.."}
        {status === "failed" && error}
      </p>
      <p>리덕스에서 불러온 status : {status}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(fetchPosts())}>get data</button>
    </div>
  );
};
export default UserInfo;
