/**
 * Created by cole on 2017-02-07.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from './Actions';
import './Sidebar.css';

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="toggle" onClick={this.props.toggle}>
          <i className="fa fa-chevron-left" role="presentation" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {}
}

function mapStateToDispatch(dispatch) {
  return {
    toggle: () => {
      dispatch(toggleSidebar());
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Sidebar);
