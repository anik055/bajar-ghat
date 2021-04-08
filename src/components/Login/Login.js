
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, initializeLoginFramework, handleSignOut, handleFbSignIn, handleGithubSignIn, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "./LoginManager";
import google from '../../images/icons/google.png';



function Login() {
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res =>{
        handleResponse(res, true);
      })
  }

  const handleResponse = (res,redirect) => {
      setUser(res);
      setLoggedInUser(res);
      if(redirect){
          history.replace(from);
      }
  }

//   const fbSignIn = () => {
//     handleFbSignIn()
//     .then(res =>{
//         handleResponse(res, true);
//     })
// }

  const signOut = () => {
      handleSignOut()
      .then(res =>{
        handleResponse(res, false);
      })
  }
  

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Login</h3>
      {user.isSignedIn ? (
        <button onClick={signOut}>sign out</button>
      ) : (
        <button onClick={googleSignIn}> <img src={google} alt=""/> Continue with Google</button>
      )}
      <br />

      {/* <button onClick={fbSignIn}>Sign in using facebook</button>
      <br />
      <button onClick={handleGithubSignIn}>Sign in using github</button>

      <p>user name: {user.displayName} </p>
      <img src={user.photoURL} alt="" />

      {user.isSignedIn && (
        <div>
          <p>welcome {user.name}</p>
          <img src={user.photo} alt="" />
        </div>
      )} */}

      {/* <h1>our authentication</h1>
      <input
        type="checkbox"
        onChange={() => setNewUser(!newUser)}
        name="newUser"
      />
      <label htmlFor="newUser">New user sign up</label> */}

      {/* <form onSubmit={handleSubmit} action="">
        {newUser && (
          <input
            type="text"
            name="name"
            onBlur={handleBlur}
            placeholder="write your name"
            required
          />
        )}
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          placeholder="write your email address"
          required
        />
        <br />
        <input
          type="password"
          onBlur={handleBlur}
          name="password"
          placeholder="your password"
          required
        />
        <br />
        <input type="submit" value={newUser ? "sign up" : "sign in"} />
      </form> */}
      {/* <p style={{ color: "red" }}>{user.error}</p>
      {user.success && (
        <p style={{ color: "green" }}>
          user {newUser ? "created" : "Logged In"} success
        </p>
      )} */}
    </div>
  );
}

export default Login;
