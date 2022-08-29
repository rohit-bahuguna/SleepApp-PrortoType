import { createContext, useEffect, useState } from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import response  from  "./api"
import './App.css';

import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import FifthPage from './Pages/Fifthpage'
import SixthPage from "./Pages/SixthPage";
import SeventhPage from "./Pages/SeventhPage";
import EighthPage from "./Pages/EighthPage";
import NinthPage from "./Pages/NinthPage"
const dataContext = createContext();
function App() {
  const [arr , setArr] = useState({})
  useEffect(() => {
     
    response().then((data) => setArr({...data.data[0]})
     
    ).catch(err => console.log(err))
  }, [])
  
  

  return (
    <><BrowserRouter>
      <dataContext.Provider value={arr}>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/secondpage" element={<SecondPage />} />
          <Route path="/thirdpage" element={<ThirdPage />} />
          <Route path="/fourthpage" element={<FourthPage />} />
          <Route path="/fiftthpage" element={<FifthPage />} />
          <Route path="/sixthpage" element={<SixthPage />} />
          <Route path="/seventhpage" element={<SeventhPage />} />
          <Route path="/eighthpage" element={<EighthPage />} />
          <Route path="/ninethpage" element={<NinthPage />} />

        </Routes>
    </dataContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export {dataContext}