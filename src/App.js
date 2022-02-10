import React, { Component } from "react";
import {connect} from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { auth, handelUserProfile } from './firebase/utils';
import { setCurrentUser } from "./redux/User/user.actions";
//layouts
import MainLayout from "./layouts/MainLayouts";
import HomepageLayout from "./layouts/HomepageLayout"
//pages
import Homepage from './pages/Homepage';
import Registration from "./pages/Registration";
import Login from "./pages/login";
import Recovery from "./pages/Recovery";
import Mens from "./pages/Mens";
import Womans from "./pages/Womans";
import'./default.scss';





class App extends Component {

  

    authListner = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;


        this.authListner = auth.onAuthStateChanged(async userAuth => {
          if(userAuth){
            const userRef = await handelUserProfile (userAuth);
            userRef.onSnapshot(snapshot => {
              setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
              });
            })

          }
          setCurrentUser(userAuth);
         
            });        
    }

    componentWillUnmount(){
      this.authListner();

    }


  render() {
    const{ currentUser } = this.props;
    
    return (
      <div className="App">
       <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout >
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout>
                <Registration />
              </MainLayout>
          )} />
          <Route path="/login" 
            render={() =>currentUser ? <Redirect /> :(
                <MainLayout >
                  <Login />
                </MainLayout>
            )} />
            <Route path='/recovery' render={() =>(
              <MainLayout>
                <Recovery />
              </MainLayout>
            )} />
              <Route path='/mens' render={() =>(
              <MainLayout>
                <Mens />
              </MainLayout>
            )} />
            <Route path='/womans' render={() =>(
              <MainLayout>
                <Womans />
              </MainLayout>
            )} />
        </Switch>   
      </div>
    );
  }
  }
 
  const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  });

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);
