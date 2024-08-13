import Shopping from "./Shopping.js"
import Header from "./Header.js"
import Allcartitem from "./Allcartitem.js"
import {Routes,Route} from "react-router-dom"
import "./App.css"
function App() {
  return (
    <div className="App">
          <Header/>
         <Routes>
              <Route path="/" element={<Shopping/>}></Route>
              <Route path="/cart" element={<Allcartitem/>}></Route>
         </Routes>
    </div>
  );
}

export default App;
