/**
 * Created by cole on 2017-02-07.
 */
import {applyMiddleware, createStore} from "redux";
//import logger from "redux-logger";
import thunk from "redux-thunk";
import { browserHistory } from "react-router";
import { routerMiddleware } from 'react-router-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io(process.env.REACT_APP_SOCKET_URL);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

import reducer from "./reducer";

const middleware = applyMiddleware(/*logger(), */thunk, routerMiddleware(browserHistory), socketIoMiddleware);
export default createStore(reducer, middleware);