import { Sales } from "pages/Sales/Sales";
import { Routes, Route } from "react-router-dom";
import { Box } from "./Box/Box";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="sales" element={<Sales />}/>
            
         
        </Route>
      </Routes>
   </Box>
  );
};
