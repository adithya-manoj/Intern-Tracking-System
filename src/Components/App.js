import Course from "./Course";
import Footer from "./Footer";
import { LoginButton } from "./LoginButton";
import Navigationbar from "./Navigationbar";
import Techlab from "./Techlab";

import Join from "./Join";

function App() {
  return (
    <>
    <Navigationbar/>
    <LoginButton/>
    <Course/>
   
    <Techlab/>
    <Join/>
    <Footer/>
    </>
  );
}

export default App;
