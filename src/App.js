import "./App.css";
import NewPassword from "./components/NewPassword";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
import SignUp from "./components/SignUp";
function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  function incrementValue() {
    dispatch(increment());
  }
  return (
    <div className="app">
      {/* <NewPassword /> */}
      <SignUp/>

      {/* <p>{value}</p>
      <button onClick={incrementValue}>increment</button> */}
  
    </div>
  );
}

export default App;
