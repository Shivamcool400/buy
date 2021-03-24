import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Aboutus from './components/pages/aboutus';
import Login from './components/pages/login';
import Footer from './components/footer';
import Contactus from './components/pages/contactus';
import Phones from './components/pages/phone';
import Laptops from './components/pages/laptop';
import GamingConsoles from './components/pages/gamingconsole';
import Accessories from './components/pages/accessories';

function App() {
  return (
    <div className="App">
      <div className="background">
          <Router>
          <Navbar/>
              <Switch>
              <Route path='/' exact component={Home} />
                  <Route path='/aboutus'  component={Aboutus} />
                  <Route path='/contactus'  component={Contactus} />
                  <Route path='/home'  component={Home} />
                  <Route path='/login'  component={Login} />
                  <Route path='/phones'  component={Phones} />
                  <Route path='/laptops' component={Laptops} />
                  <Route path='/gamingconsoles' component={GamingConsoles} />
                  <Route path='/accessories' component={Accessories} />
               
              
              </Switch>
      
               <Footer/>
          
          
          
          
          </Router>
      </div>
      </div>
      
    
      
  );
}

export default App;
