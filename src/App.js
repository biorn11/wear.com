import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { auth, handelUserProfile } from './firebase/utils';
//layouts
import MainLayout from "./layouts/MainLayouts";
import HomepageLayout from "./layouts/HomepageLayout"
//pages
import Homepage from './pages/Homepage';
import Registration from "./pages/Registration";
import Login from "./pages/login";
import'./default.scss';

const initialState = {
  currentUser: null
};


class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        ...initialState
      };
    }

    authListner = null;

    componentDidMount() {
        this.authListner = auth.onAuthStateChanged(async userAuth => {
          if(userAuth){
            const userRef = await handelUserProfile (userAuth);
            userRef.onSnapshot(snapshot => {
              this.setState({
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              })
            })

          }
          this.setState({
            ...initialState
          });
            });        
    }

    componentWillUnmount(){
      this.authListner();

    }


  render() {
    const{ currentUser } = this.state;
    
    return (
      <div className="App">
       <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
          )} />
          <Route path="/login" 
            render={() =>currentUser ? <Redirect /> :(
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
            )} />
        </Switch>   
      </div>
    );
  }
  }
 

export default App;
