import NavBar from "./components/Navbar";
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import {BrowserRouter,Link,Route} from 'react-router-dom';
import { createTheme,ThemeProvider } from '@material-ui/core';
import "@fontsource/montserrat"


const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'serif',
    ].join(','),
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>

  );
}

export default App;
