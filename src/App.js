import {HashRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import { Landing } from './pages';


function App() {
  return (
  <Provider store={store}>
    <Landing />
    {/* <Router> */}
      {/* <Routes /> */}
    {/* </Router> */}
    </Provider>
  );
}

export default App;
