import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "pages/Dashboard/Dashboard";
import { Feedback } from "pages/Feedback/Feedback";
import { Reports } from "pages/Reports/Reports";
import { Layout } from "./Layout/Layout";
import { InvoicesDetails } from "./InvoicesDetails/InvoicesDetails";
import { NotFound } from "pages/NotFound/NotFound";
import { CustomerDetails } from "pages/CustomerDetails/CustomerDetails";
import { GlobalStyle } from "./GlobalStyles";

const Sales = lazy(() => import('../pages/Sales/Sales').then(
  module => ({...module,
  default: module.Sales
  })));
const Invoices = lazy(() => import('./Invoices/Invoices').then(
  module => ({...module,
  default: module.Invoices
  })));
const Customers = lazy(() => import('../pages/Customers/Customers').then(
  module => ({...module,
  default: module.Customers
})));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<Sales />} >
            <Route index element={<div>This is sales' index page</div>}/>
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>This is invoices' index page</div>}/>
              <Route path=":invoiceId" element={<InvoicesDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>}/>
          </Route>
          <Route path="reports" element={<Reports />} /> 
          <Route path="feedback" element={<Feedback />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle/>
   </>
  );
};
