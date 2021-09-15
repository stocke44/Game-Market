import NavBar from "./components/Navbar"
import Home from "./components/pages/Home"
import Signin from "./components/pages/Signin"
import Signup from "./components/pages/Signup"
import Profile from "./components/pages/Profile"
import {BrowserRouter,Link,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/signin">
        <Signin></Signin>
      </Route>
      <Route path="/signup">
        <Signup></Signup>
      </Route>
      <Route path="/profile">
        <Profile></Profile>
      </Route>
    </BrowserRouter>
    
  );
}

export default App;
