import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//sites:
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from "./views/Homepage";
import AddCards from "./views/AddCards";
import Errorpage from "./views/Errorpage";
import App from './App';

import store from "./redux/configureStore";
import { Provider } from "react-redux";
//router


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Provider store={store}>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="skapakort" element={<AddCards/>} />
        <Route path="*" element={<Errorpage />} />
      </Route>
    </Routes>
    <Footer/>
  </Provider>
</Router>
</React.StrictMode>
);

