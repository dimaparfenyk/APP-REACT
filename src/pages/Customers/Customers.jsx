import { Box } from "components/Box/Box"

export const Customers = () => {
    return (
        <Box as="main" display="flex" flexDirection="column">
            <Box as="header" borderBottom="1px solid black" p={4}>
                <div>Customers</div>
            </Box>
        </Box>
    );
};