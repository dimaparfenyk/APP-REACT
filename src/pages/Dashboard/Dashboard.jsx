import { Box } from "components/Box/Box";

export const Dashboard = () => {
    return (
        <Box as="main" display="flex" flexDirection="column">
         <Box as="header" borderBottom="1px solid black" p={4}>
            <div>Dashboard</div>
         </Box>
       </Box> 
    )
}