import './assets/css/App.css';
import React, {Component} from 'react';
import CardsGrid from "./components/CardsGrid";
import Instructions from "./components/Instructions";
import Home from "./components/Home";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/play' component={CardsGrid}/>
                    <Route path='/instructions' component={Instructions}/>
                </Switch>
            </div>
        );
    }
}

export default App;
