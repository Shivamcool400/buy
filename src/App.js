import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Aboutus from './components/pages/aboutus';
import Subscribeus from './components/pages/subscribeus';
import Login from './components/pages/login';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="background">
          <Router>
          <Navbar/>
              <Switch>
              <Route path='/' exact component={Home} />
                  <Route path='/aboutus'  component={Aboutus} />
                  <Route path='/subscribeus'  component={Subscribeus} />
                  <Route path='/home'  component={Home} />
                  <Route path='/login'  component={Login} />
               
              
              </Switch>
      
               <Footer/>
          
          
          
          
          </Router>
      </div>
      </div>
      
    
      
  );
}

export default App;