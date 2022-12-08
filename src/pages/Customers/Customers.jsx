import { SearchBox } from "components/SearchBox/SearchBox";
import { getCustomers } from "fakeApi";
import { useEffect, useState, useMemo  } from "react";
import { NavLink, useLocation, useSearchParams} from "react-router-dom";

export const Customers = () => {
    const location = useLocation();
    const [customers, setCustomers] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('query')??'' ;

    useEffect(() => {
        getCustomers().then(setCustomers);
    }, []);

    const visibleCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [customers, filterParam]);

    const changeFilter = value => {
    setSearchParams(value !== '' ? ({ query: value }) : {});
  };

    return (
        <main>
            <SearchBox
            value={filterParam}
                onChange={changeFilter} />
            {customers.length>0 && (<ul>
                {visibleCustomers.map(({ id, name }) => <li key={id}>
                    <NavLink to={`${id}`} state={{from:location}}>
                        {name}
                    </NavLink>
                </li>)}
            </ul>)}
            <p>{filterParam }</p>
        </main>   
    );
};