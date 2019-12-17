import React from 'react';

import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
import FormInput from '../form-input/formInput';

export default class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Password do not match!');
            return;
        }try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);

       await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassword: ''

            })
        
        } 
        catch (error){
            console.error(error) 
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          });
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className= "w-1/2 bg-white ml-16  mt-10 h-10">
            <p class="leading-loose text-san ml-1 text-2xl">I do not have an account</p>
            <p class="italic leading-loose ml-2 text-black bg-transparent font-medium px-4 py-2 m-2">Sign up with your email and password</p>
            <form class="w-full max-w-sm " onSubmit={this.handleFormSubmit}>
            <div class="flex items-center border-b border-b-2 border-black py-2">
            <label class="italic block lowercase tracking-normal text-black text-l font-light mb-0" 
            for="grid-first-name">Display Name:
        </label>
            <FormInput
                            type="text"  
                            
                            name="displayName" 
                            value={displayName} 
                            onChange={this.handleChange}
                            required
                            />
            
            </div>
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
                            // aria-label="Full name" 
                            name="password" 
                            // label="password"
                            value={password} 
                            onChange={this.handleChange}
                            required
                            />
                            
            </div>
            <div class="flex items-center border-b border-b-2 border-black py-2">
            <label class="italic block lowercase tracking-wide text-black text-l font-light mb-2" for="grid-first-name">confirm password:</label>
            <FormInput
                            type="password"  
                            // aria-label="Full name" 
                            name="confirmPassword" 
                            // label="password"
                            value={confirmPassword} 
                            onChange={this.handleChange}
                            required
                            />
                            
            </div>
            <div class="flex justify-center mb-4 px-3 mt-10 ">
            
            <button class="bg-black w-48 h-16 mr-24 text-white hover:text-black tracking-widest text-center hover:bg-transparent font-mono py-2 px-4 border-b-4 squared inline-flex items-center" type="submit">
            SIGN UP
          </button>
            </div>
            </form>
            </div>
        )
    }
}