import { useDispatch, useSelector} from "react-redux";
import { useEffect, useRef, useState } from 'react';
import './App.css';
import {getUser} from "./redux/cardSlice";
import Homepage from "./views/Homepage";
import Loader from "./components/Loader";
import Errorpage from "./views/Errorpage";



function App() {
  const [isLoading, setLoading] = useState(true);
  const [showUser, setShowUser] = useState(false);

  const dispatch = useDispatch()
  const { allCards, activeC, user, loading, error } = useSelector(state=> state.cards);
 
  const fetched = useRef(true);
  
 

  useEffect(() => {
    if(fetched.current && user === null){
      dispatch(getUser());
      fetched.current = false;
    }
    if (loading) {
      setTimeout(() => {
      setShowUser(true);
      setLoading(false);
      
    }, 3000);
    }
    
    }, [loading]);
  

 
  return (
    <div className="App">
      <main className="mainContent">
      <h1 className="fancyfont">WALL3T</h1>
      
      {isLoading && <div className="loader__centered">
      <h3 className="fancyfont">Laddar..</h3>
        <Loader/>
      </div>}
      {error && <Errorpage/>}
      {showUser && <>
      {user && 
      <div className="aboveMain">
      <Homepage
      items = {allCards}
      active = {activeC}
      user = {user}
      title = "Dina kort"
      />
      </div>}
      </>
      }
      </main>
     
    </div>
  );
}

export default App;
