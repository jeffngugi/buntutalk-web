import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
  <Provider store={store}>
    {/* // <Landing /> */}
     <Router> 
       <Navbar />
       <Routes /> 
       <Footer />
     </Router> 
     
     </Provider>
  );
}

export default App;
