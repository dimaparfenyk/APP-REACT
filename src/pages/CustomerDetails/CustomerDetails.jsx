import { useEffect, useState } from "react";
import { getCustomerById } from "fakeApi";
import { Link, useLocation, useParams } from "react-router-dom";

export const CustomerDetails = () => {
    const [customer, setCustomer] = useState(null);
    const { customerId } = useParams();
    const location = useLocation();

    useEffect(() => {
        getCustomerById(Number(customerId))
        .then(setCustomer)
    }, [customerId]);
    
    if (!customer) {
        return;
    };

    const href = location.state?.from ?? "/customers";
    return (<div>
        <Link to={href}>Back to customers</Link>
        <p>Customer ID: {customer.id}</p>
        <p>Customer name: {customer.name}</p>
    </div>);
};