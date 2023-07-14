import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocailLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handelGoogleSign = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user)
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div>
      <div className="divider divider-horizontal">OR</div>
      <div className="text-center">
        <button onClick={handelGoogleSign} className="btn btn-circle btn-outline">  G</button>
      </div>
    </div>
  );
};

export default SocailLogin;