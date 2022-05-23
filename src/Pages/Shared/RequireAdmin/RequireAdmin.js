import { signOut } from 'firebase/auth';
import React from 'react'
import auth from '../../../firebase.init';
import { Loading } from '../Loading/Loading';
import { useAdmin } from './../../../hooks/useAdmin';

export const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin();

    let location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if (!admin) {
      signOut(auth);
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}
