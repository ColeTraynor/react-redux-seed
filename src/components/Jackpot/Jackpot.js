/**
 * Created by cole on 2017-02-07.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateJackpot } from './Actions';
import { toggleSidebar } from '../Sidebar';
import './Jackpot.css';

class Jackpot extends Component {
  componentDidMount() {
    this.props.updateJackpot();
  }

  render() {

    return (
      <div className="jackpot">
        { !this.props.sidebar || (
          <div onClick={this.props.toggleSidebar}>
            <i className="fa fa-chevron-right" role="presentation"/>
          </div>
        )}
        Jackpot
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {...store.jackpot, sidebar: store.sidebar.collapsed};
}

function mapStateToDispatch(dispatch) {
  return {
    updateJackpot: () => {
      dispatch(updateJackpot());
    },

    toggleSidebar: () => {
      dispatch(toggleSidebar());
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Jackpot);