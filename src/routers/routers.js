import React from "react";
import { Router, Route, browserHistory } from 'react-router';
// import { Router, Route } from 'react-router-dom';
// import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import store from '../Store';
import Layout from '../layout/layout.js';
import Yrz from '../conponments/YRZ.js';
import Candan1 from "../conponments/candan1";
import Login from '../conponments/Login';
import Jump from '../conponments/jump';
import Music from '../conponments/Music';
import UseStateAnduseEffect from '../conponments/ReactHooks/useStateAnduseEffect';
import DataType from '../conponments/JudgeType';
import UseContext from '../conponments/ReactHooks/useContext';
import UseRef from '../conponments/ReactHooks/useRef';
import UseMemo from '../conponments/ReactHooks/useMemo';
import UseCallback from '../conponments/ReactHooks/useCallback';
import UseImperativeHandle from '../conponments/ReactHooks/useImperativeHandle';
import BaiduMap from '../conponments/BaiduMap';
import Upload from '../conponments/upload';


// const history = createBrowserHistory();

const RouteConfig = (
    <Provider store={store}>
        <Router history={ browserHistory }>
        {/*<Router history={history}>*/}
            <Route path="/" component={ Layout }>
                <Route path="/yrz" component={ Yrz }></Route>
                <Route path="/candan1" component={ Candan1 }></Route>
                <Route path="/music" exact component={ Music }></Route>
                <Route path="/usestate" exact component={ UseStateAnduseEffect }></Route>
                <Route path="/datatype" exact component={ DataType }></Route>
                <Route path="/usecontext" exact component={ UseContext }></Route>
                <Route path="/useref" exact component={ UseRef }></Route>
                <Route path="/usememo" exact component={ UseMemo }></Route>
                <Route path="/usecallback" exact component={ UseCallback }></Route>
                <Route path="/useimperativeHandle" exact component={ UseImperativeHandle }></Route>
                <Route path="/baidumap" exact component={ BaiduMap }></Route>
                <Route path="/upload" component={ Upload }></Route>
            </Route>
            <Route path="/login" component={ Login }></Route>
            <Route path="/jump" component={ Jump }></Route>
        </Router>
    </Provider>
);

export default RouteConfig;