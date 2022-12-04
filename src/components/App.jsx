import { Customers } from "pages/Customers/Customers";
import { Dashboard } from "pages/Dashboard/Dashboard";
import { Feedback } from "pages/Feedback/Feedback";
import { Reports } from "pages/Reports/Reports";
import { Sales } from "pages/Sales/Sales";
import { Routes, Route } from "react-router-dom";
import { Box } from "./Box/Box";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="reports" element={<Reports />} /> 
          <Route path="feedback" element={<Feedback />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
   </Box>
  );
};
