import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Rosh from './Games/Rosh';
// import RighBar from './Sidebar/rightbar';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import { Route, Switch ,  BrowserRouter as Router} from 'react-router-dom';

import about from './Pages/about';
// import navBar from './Sidebar/tempNav';



class App extends React.Component {

  render(){
    return (
      <>
      {/* <navBar/> */}
      <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="devices">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Devices
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Route path="/home" component={props => <about />} />
                    </main>
                </React.Fragment>
            )}
            />
         </Router>
      <h1 style={{alignContent:"flex-start" , textAlign:"left" }}>sdfdsf</h1>

      <div className="Ros">
      <Rosh />
      </div>
      </>
     );
  }
}


export default App;