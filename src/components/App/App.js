import React, { Component } from 'react';
import ReduxToastr  from 'react-redux-toastr';
import { connect } from 'react-redux';
import { Sidebar } from '../Sidebar';
import { updateUser } from '../User';
import { updateSystem, startPing } from '../System';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.updateUser();
    this.props.updateSystem();
  }

  render() {
    return (
      <div id="main" className="app">
        <div style={{display: this.props.collapsed ? "none": "block"}}>
          <Sidebar />
        </div>

        <div id="right" style={{marginLeft: this.props.collapsed ? "0px": ""}}>
          <div className="main scrollable sidebar-offset" style={{left: this.props.collapsed ? "0px": ""}}>
            { this.props.children }
          </div>
        </div>

        <ReduxToastr position="bottom-right" transitionIn="fadeIn" transitionOut="fadeOut"/>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    collapsed: store.sidebar.collapsed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: () => {
      dispatch(updateUser());
    },

    updateSystem: () => {
      dispatch(updateSystem());
      startPing();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
