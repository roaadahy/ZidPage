import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/almarai";
import "./App.css";

function App() {
  return (

    <Router>
      
         <NavBar /> 
       <Switch>
          <Route component={Home} path="/" exact />
       </Switch>
        <Footer />
     
    </Router>

  );
}

export default App;
