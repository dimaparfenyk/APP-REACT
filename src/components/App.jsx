import { Routes, Route } from "react-router-dom";

import { Customers } from "pages/Customers/Customers";
import { Dashboard } from "pages/Dashboard/Dashboard";
import { Feedback } from "pages/Feedback/Feedback";
import { Reports } from "pages/Reports/Reports";
import { Sales } from "pages/Sales/Sales";
import { Box } from "./Box/Box";
import { Layout } from "./Layout/Layout";
import { InvoicesDetails } from "./InvoicesDetails/InvoicesDetails";
import { Invoices } from "./Invoices/Invoices";
import { NotFound } from "pages/NotFound/NotFound";

export const App = () => {
  return (
    <Box>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
   </Box>
  );
};
