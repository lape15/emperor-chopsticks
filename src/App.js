import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import routes from '../src/routes/index'
// import './App.css';
import Header from './components/Header'

class App extends React.Component{
  render(){
    console.log(routes);
    return (
      <>
      <BrowserRouter>
        <Header/> 
      <div className="App">
          <Switch>
            {routes.map((route, key) => 
              <Route
                key={key}
                exact={route.exact}
                path={route.path}
                component={route.component}
                // render={(props) => <route.component {...props} />}
              />
            )}
            </Switch>
            </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
