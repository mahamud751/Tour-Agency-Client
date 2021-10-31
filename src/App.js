import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import ManageAdmin from './components/ManageAdmin/ManageAdmin';
import ManageBooking from './components/ManageAdmin/ManageBooking';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Pages/Booking/Booking';
import AddEvent from './components/Pages/BookingEvents/AddEvent/AddEvent';
import BookingEvent from './components/Pages/BookingEvents/BookingEvent';
import MyEvent from './components/Pages/BookingEvents/MyEvent/MyEvent';

import Home from './components/Pages/Home/Home';
import ManageEvent from './components/Pages/ManageEvent/ManageEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myEvent">
              <MyEvent></MyEvent>
            </Route>
            <PrivateRoute path='/booking/:bookingId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/bookingEvent">
              <BookingEvent></BookingEvent>
            </Route>
            <Route path="/addEvent">
              <AddEvent></AddEvent>
            </Route>
            <Route path="/manageEvent">
              <ManageEvent></ManageEvent>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/manageAdmin">
              <ManageAdmin></ManageAdmin>
            </Route>
            <Route path="/manageBooking">
              <ManageBooking></ManageBooking>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
