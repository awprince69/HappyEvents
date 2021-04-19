import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Order from './Component/Transaction/Order/Order';
import CheckList from './Component/Transaction/CheckList/CheckList';
import CustomerReview from './Component/Transaction/CustomarReview/CustomerReview';
import OrderList from './Component/Admin/OrderList/OrderList';
import AddService from './Component/Admin/AddService/AddService';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';
import ManageService from './Component/Admin/ManageService/ManageService';
import Login from './Component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path="/service/:id">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path='/checkList'>
            <CheckList></CheckList>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <CustomerReview></CustomerReview>
          </PrivateRoute>
          <PrivateRoute path='/orderList'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/addAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path='/manageService'>
            <ManageService></ManageService>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
