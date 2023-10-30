import React from "react";
import Home from "../../components/customer/Home";
import About from "../../components/customer/About";
import Work from "../../components/customer/Work";
import Testimonial from "../../components/customer/Testimonial";
import Contact from "../../components/customer/Contact";
import Chat from "../../components/chatBox/Chat";
import { Footer } from "../../components/footer";

export function CustomerHome(props){
    return (
        <div className="CustomerApp">
          <Home />
          <About />
          <Work />
          <Testimonial />
          <Contact />
          <Chat />
          <Footer />
        </div>
      );
}