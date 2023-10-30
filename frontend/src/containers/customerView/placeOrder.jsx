import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Footer } from "../../components/footer";
import { PlaceOrder } from "../../components/placeOrder";
import CustomerNavbar from "../../components/customer/Navbar";

export function PlaceOrderPage(props){
    return <PageContainer>
        <CustomerNavbar/>
        <InnerPageContainer>
            <PlaceOrder />
        </InnerPageContainer>
        <Footer />
    </PageContainer>
}