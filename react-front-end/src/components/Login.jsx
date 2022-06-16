import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "../api/axios"; 
const LOGIN_URL = '/auth';

export default function Login() {
    //global state
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //set focus on input
    useEffect(() => {
        userRef.current.focus();
    }, [])

    //if user changes anything, remove err msg
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            
            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
            

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return(
        <div className="parent">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className="child">
        <form onSubmit={handleSubmit}>
        <div className="input-section">
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            id="email"
            ref={userRef}
            autoComplete="off"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            id="password"
            ref={userRef}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
      </form>
      </div>
        </div>
    )
}