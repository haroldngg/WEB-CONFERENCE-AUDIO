import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ListParticipants from './pages/ListParticipants';
import Settings from './pages/Settings';
import Conference from './pages/Conference';


function App() {
    return ( 
        <>
            <Router>
                <Navbar />
                    <Switch>
                        <Route path = "/" exact component = { Home } /> 
                        <Route path = "/List-of-Conference" component = { ListParticipants } /> 
                        <Route path = "/Settings" component = { Settings }/> 
                        <Route path = "/Home/New-conference" component = { Conference}/>
                    </Switch > 
            </Router>  
            </>
    );
}

export default App;