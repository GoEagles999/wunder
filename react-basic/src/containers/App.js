import React, { Component, createRef} from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Signup from '../components/Signup';
import LoginForm from '../components/LoginForm';
import { Glyphicon } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.refs = {}
    this.refs.navbutton = createRef();
    this.state = {
      showLoginForm: true,
      signup :false,
      showCheckmark: false
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.refs.navbutton.handleLogoutButton();
    this.setState({ 
      showLoginForm: false,
      showCheckmark: true
    });
  }

  handleLogout() {
    this.refs.navbutton.handleLogoutButton();
    this.setState({
      showLoginForm: true,
      showCheckmark: false
    });
  }

  render() {
    return (
      <div className='app'>
        <Navbar ref={this.refs.navbutton} handleLogout={this.handleLogout} />
        <div className={this.state.showLoginForm === true ? '' : 'hide'}>
          <LoginForm handleLogin={this.handleLogin} />
        </div>
        <div>
        </div>
        <div className={this.state.showCheckmark === true ? 'text-center mt9x' : 'hide'}>
          <Glyphicon glyph='glyphicon glyphicon-ok-sign' />
          <h2>Great work!</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
