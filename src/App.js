import './assets/css/App.css';
import React, {Component} from 'react';
import CardsGrid from "./components/CardsGrid";

class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <CardsGrid/>
            </div>
        );
    }
}

export default App;
