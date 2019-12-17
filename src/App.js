import React from 'react';
import {Switch, BrowserRouter, Route,Redirect} from 'react-router-dom';

import Home from './home/Home';

import Shop from './pages/Shop';

import SignInandSignUp from './components/sign-in-and-sign-up/SignIn-SignUp';

// import routes from '../src/routes/index'
// import './App.css';
import Header from './components/Header';
import {auth, createUserProfileDocument} from './firebase/firebase.util';

 import {connect} from 'react-redux';

 import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
            setCurrentUser ({
            id : snapshot.id,
            ...snapshot.data()
          })
        });
       
      }
      setCurrentUser( userAuth)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    
    return (
      <>
      <BrowserRouter>
        <Header /> 
      <div className="App">
          <Switch>
           <Route exact path ='/' component={Home}/>
            <Route path='/shop' component={Shop}/>
            <Route exact path='/sign-in' render={() => this.props.currentUser ?  (<Redirect to='/' />) : (<SignInandSignUp/>) }/>
           </Switch>
            </div>
        </BrowserRouter>
      </>
    )
  }
}

const mapStateToProps = ({user }) => ({
    currentUser : user.currentUser  
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default  connect(
                mapStateToProps,
              mapDispatchToProps )(App);
