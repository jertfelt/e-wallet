import { useDispatch, useSelector} from "react-redux";
import { useEffect, useRef } from 'react';
import './App.css';
import {getUser} from "./redux/cardSlice";
import Homepage from "./views/Homepage";
import { saveState } from "./redux/cardSlice";
import Errorpage from "./views/Errorpage";

function App() {
 
  const dispatch = useDispatch()
  const { allCards, activeC, user } = useSelector((state)=> state.cards);
  const fetched = useRef(true);


  useEffect(() => {
    if(fetched.current && user === null){
      dispatch(getUser());
      fetched.current = false;
    }
    else {
      if (user !== null){
        console.log("kollar namn", user.name)
      }
      
    }
    }, []);
  

 
  return (
    <div className="App">
      <div className="mainContent">
      <h1 className="fancyfont">WALL3T</h1>
      {/* {isLoading && <Loader/>}
      {error && <Errorpage/>} */}
      {user && <div className="aboveMain">
      
      <Homepage
      items = {allCards}
      active = {activeC}
      user = {user}
      title = "Dina kort"
      />
      </div>}
     
      </div>
     
    </div>
  );
}

export default App;
