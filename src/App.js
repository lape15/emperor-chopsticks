import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import routes from '../src/routes/index'
// import './App.css';
import Header from './components/Header';
import {auth} from './firebase/firebase.util'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser : user
      });
      console.log(user)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    console.log(routes);
    return (
      <>
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/> 
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
