import { useEffect , useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import AuthService from './utils/axios_util';

const PrivateRoute = ({children , redirect = '/login'}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [login , setLogin] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const result = await AuthService.checkAuth();
                setLogin(result);
            } catch (e) {
                setLogin(false);
            }
        };

        checkAuth()

    }, []);

    if (!login) {
       if(location.pathname){
            navigate('/login', { state: { from: location.pathname } , replace: true } );
       }
       return navigate(redirect, {
            state: { from: location.pathname },
            replace: true,
        });
    }

    return children;
}

export default PrivateRoute;