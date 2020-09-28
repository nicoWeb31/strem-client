import React, { Component } from 'react';
import {API_GOOGLE_OAUT_KEY } from '../Config';
import { signIn,singnOut} from '../action/action';
import { connect } from 'react-redux';




class GoogleAuth extends Component {
    state = {
        isSignIn: null
    }


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: API_GOOGLE_OAUT_KEY,
                scope: 'email'
            }).then(() => {
                //creation d'une istance de auth
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log(this.auth);
                this.setState({ isSignIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }


    onAuthChange = (isSignIn) => {
        if(isSignIn){
            this.props.signIn()
        }else{
            this.props.signOut()
        }
    }


    onSigninClick = () =>{
        this.auth.signIn()
    }

    onSingOutClick = () =>{
        this.auth.signOut()
    }


    //test is Signed in
    renderAuthButton() {
        if (this.state.isSignIn === null) {
            return null
        } else if (this.state.isSignIn === true) {
            return (
                <button className="ui red google button"
                onClick={this.onSingOutClick}
                >
                    <i className="google icon"/>
                        Sign Out !
                </button>

            )
        } else {
            return (

                <button className="ui green google button"
                onClick={this.onSigninClick}
                >
                    <i className="google icon"/>
                        Sign IN with Google!!
                </button>
            )
        }
    }


    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default connect(null,{signIn,singnOut})(GoogleAuth);