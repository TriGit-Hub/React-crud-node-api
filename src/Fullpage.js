import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import App from './App';

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */
        sectionsColor={["#7BAABE", "#4BBFC3", "#0798ec"]}
        //sectionsColor= {'#ff5f45', '#4BBFC3', '#7BAABE', '#ff5f45', '#4BBFC3', '#7BAABE','#ff5f45','#bd1710','#f0c222'}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <div className="App">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>
                                <code>Carlos Jose Trigueros Prueba tecnica</code>
                                </p>
                                <p
                                    className="App-link"

                                    rel="noopener noreferrer"
                                >
                                    Crud react conectado a api en node.js
                                </p>
                            </header>
                        </div>
                    </div>
                    <div className="section">
                        <App/>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;
