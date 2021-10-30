import './Login.css'
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

;

const Login = () => {

    const { googleSignUp } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'


    const handleSign = () => {
        googleSignUp()
            .then(result => {
                console.log(result.user)
                history.push(redirect_url)
            })
    }
    return (
        <div className="">
            <div>
                <div className="">
                    {/* <div className="col-lg-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div> */}
                    <div className="">
                        <h1 className="fs-1 mt-5 text-center">Before Shopping Please</h1>

                        {
                            <button className="inp mt-5" onClick={handleSign}>Log with Google</button>
                        }

                    </div>
                </div>


            </div>
        </div>
    );

};

export default Login;