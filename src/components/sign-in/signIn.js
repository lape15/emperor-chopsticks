import React from 'react';
import FormInput from '../form-input/formInput';
import {signInWithGoogle, auth} from '../../firebase/firebase.util'

export default class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
                email : '',
                password: ''
        }
    }

     handleFormSubmit = async e => {
            e.preventDefault();
        const {email, password} = this.state;
    try{
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({
            email : '',
            password : ''
        });
    } 
    catch(error) {
        console.log(error)
    }
           
}


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          });
    }

    render(){
        const {email, password} = this.state;
        return (
            <div class="w-1/2 bg-white ml-16  mt-10 h-10">
            <p class="leading-loose text-san ml-1 text-2xl">I already have an account</p>
            <p class="italic leading-loose ml-2 text-black bg-transparent font-medium px-4 py-2 m-2">Sign in with your email and password</p>
            <form class="w-full max-w-sm " onSubmit={this.handleFormSubmit}>
            <div class="flex items-center border-b border-b-2 border-black py-2">
            <label class="italic block lowercase tracking-normal text-black text-l font-light mb-0" 
            for="grid-first-name">email:
        </label>
            <FormInput
                            type="text"  
                            
                            name="email" 
                            value={email} 
                            onChange={this.handleChange}
                            required
                            />
            
            </div>
            <div class="flex items-center border-b border-b-2 border-black py-2">
            <label class="italic block lowercase tracking-wide text-black text-l font-light mb-2" for="grid-first-name">password:</label>
            <FormInput
                            type="password"  
                          
                            name="password" 
                            // label="password"
                            value={password} 
                            onChange={this.handleChange}
                            required
                            />
                            
            </div>
            <div class="flex mb-4 px-3  mt-10 ">
      
            <button class="bg-black w-48 h-16 mr-24 text-white hover:text-black  hover:bg-white font-mono py-2 px-4 border-b-4 squared inline-flex items-center" type="submit">
            SIGN IN
          </button>
          <button class="bg-blue-300  w-64  text-black font-mono py-2 px-4 border-b-4  hover:text-white hover:bg-blue-700 squared inline-flex items-center" type="submit" onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </button>
       </div>
            </form>
            </div>
        )
    }
}