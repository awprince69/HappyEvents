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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path="/service/:id">
          <Order></Order>
        </Route>
        <Route path='/checkList'>
          <CheckList></CheckList>
        </Route>
        <Route path='/review'>
          <CustomerReview></CustomerReview>
        </Route>
        <Route path='/admin'>
          <OrderList></OrderList>
        </Route>
        <Route path='/addService'>
          <AddService></AddService>
        </Route>
        <Route path='/addAdmin'>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path='/manageService'>
          <ManageService></ManageService>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
