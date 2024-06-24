import Course from "./Course";
import Footer from "./Footer";
import { LoginButton } from "./LoginButton";
import Navigationbar from "./Navigationbar";
import Techlab from "./Techlab";
import Trainers from "./Trainers";

function App() {
  return (
    <>
    <Navigationbar/>
    <LoginButton/>
    <Course/>
    <Trainers/>
    <Techlab/>
    <Footer/>
    </>
  );
}

export default App;
