import React from 'react';
import './App.css';
import HomeContainer from './pages/HomeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HomeContainer />
            </header>
        </div>
    );
}

export default App;
