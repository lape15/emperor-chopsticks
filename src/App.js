import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import routes from '../src/routes/index'
// import './App.css';
import Header from './components/Header';
import {auth, createUserProfileDocument} from './firebase/firebase.util'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState(
            {
            id : snapshot.id,
            ...snapshot.data()
          }, () => {
            console.log(this.state)
          })
        });
       
      }
      this.setState({
        currentUser : userAuth
      })
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    
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
