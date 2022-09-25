import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import './App.css';
import {getUser} from "./redux/cardSlice";
import Homepage from "./views/Homepage";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser());
  });
  
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
