import "./App.css";
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccessPage } from "./containers/accessPage";
import { DriverHome } from "./containers/driverView";
import { DriverHistory } from "./containers/driverView/history";
import { CustomerHome } from "./containers/customerView";
import { AdminHome } from "./containers/adminView";
import { AboutPage } from "./containers/aboutPage";
import ContactUs from "./containers/contactPage/ContactUs";
import TrackOrder from "./containers/trackOrderPage/TrackOrder";
import { DriverRegistrationPage } from "./containers/driverRegistration";
import { PlaceOrderPage } from "./containers/customerView/placeOrder";
import Testimonials from "./containers/testimonialPage/Tmonial";
import { AdminServices } from "./containers/adminView/services";
import Customerdetails from "./containers/adminView/customerdetails";
import Deliverydetails from "./containers/adminView/deliverydetails";
import OrderSearch from "./components/customer/ordersearch";

//for route can add exact to make it only render when that url is provided

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />}/>
          <Route path="/access/:action" exact element={<AccessPage />} />
          <Route path="/driver" exact element={<DriverHome />} />
          <Route path="/driver/history" exact element={<DriverHistory />} />
          <Route path="/customer" exact element={<CustomerHome />} />
          <Route path="/customer/place-order" exact element={<PlaceOrderPage />} />
          <Route path="/admin" exact element={<AdminHome />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/testimonials" exact element={<Testimonials />} />
          <Route path="/location-track" exact element={<TrackOrder />} />
          <Route path="/admin/driver-registration" exact element={<DriverRegistrationPage />} />
          <Route path="/admin/edit-services" exact element={<AdminServices />} />
          <Route path="/customer-details" exact element={<Customerdetails />}/>
          <Route path="/delivery-details" exact element={<Deliverydetails />}/>
          <Route path="/order-search" exact element={<OrderSearch />} />

        </Routes>
      </Router>
      </div>
  );
}

export default App;