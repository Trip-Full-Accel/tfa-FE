import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "store/postMappingTest/postMappingTestReducer";
import { RootState, AppDispatch } from "store/store";
import { increment } from "../../store/counter/counterReducer";
import { fetchGet } from "../../store/getMappingTest/getMappingTestReducer";

const UserInfo = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const data = useSelector((state: RootState) => state.getMappingTest.posts);
  const status = useSelector((state: RootState) => state.getMappingTest.status);
  const error = useSelector((state: RootState) => state.getMappingTest.error);

  const dispatch = useDispatch<AppDispatch>();
  console.log(count);
  // const increment = (count) => {
  //   dispatch(increment(count));
  // };
  return (
    <div style={{ padding: "80px" }}>
      <p>리덕스에서 불러온 상수 : {count}</p>
      <p>
        리덕스에서 불러온 api데이터 : {status === "succeeded" && data}
        {status === "loading" && "loading.."}
        {status === "failed" && error}
      </p>
      <p>리덕스에서 불러온 status : {status}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(fetchGet())}>get data</button>
      <button onClick={() => dispatch(fetchPost())}>send data</button>
    </div>
  );
};
export default UserInfo;
