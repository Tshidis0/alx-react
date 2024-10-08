import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';


class App extends React.Component {
  static listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  static listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.listNotifications = App.listNotifications;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    e.preventDefault();
    if (e.ctrlKey && e.key === 'h') {
        alert("Logging you out");
        this.logOut();
    }  
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {
    return (
      <>
      <Notification listNotifications={App.listNotifications} />
      <div className="App">
        <Header />
        {this.props.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={this.listCourses}/>
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>React is fun</p>
        </BodySection>
        <Footer />
      </div>
    </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;
