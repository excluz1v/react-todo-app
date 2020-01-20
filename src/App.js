import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertContext'
import { FireBaseState } from './context/firebase/fireBase.context';


function App() {
    return (
        <FireBaseState  >
            <AlertState >
                <BrowserRouter >
                    <Navbar />
                    < div className="container" >
                        <Alert />
                        <Switch >
                            <Route path={'/'} exact component={Home} />
                            <Route path={'/about'} component={About} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FireBaseState>
    );
}

export default App;