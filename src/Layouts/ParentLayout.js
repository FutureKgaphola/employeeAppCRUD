import {Link, Outlet} from 'react-router-dom';
import userProf from '../man.png';

const ParentLayout = () => {
    return ( 
        <div className="ParentLayout">
            <header>
                <div className="DataList">

                    <img
                        alt='icon'
                        height={'30px'}
                        width={'30px'}
                        src={userProf}
                        style={{alignSelf:'start',
                        justifySelf:'start',
                        margin:'5px',
                        display:'flex',
                        color:'white',
                        backgroundColor:'#2b3452',
                        borderRadius:'5px'}} />
                        <Link to="/" className="btn btn-primary btn-sm">Back Home</Link>
                        <Link style={{marginLeft:'5px'}} to="/Addemployee" className="btn btn-primary btn-sm">Add Employee</Link>
                        
                        <h2>Employee App</h2>
                        <div className="container">
                            <div className="row">
                                
                                
                            </div>
                        </div>

                </div>
            </header>

            <main>
                <Outlet/>
            </main>

        </div>
     );
}
 
export default ParentLayout;