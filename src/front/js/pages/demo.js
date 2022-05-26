// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import sunsetImg from "../../img/sunset.jpg";
// import { Context } from "../store/appContext";

// export const Demo = () => {
//   const { store, actions } = useContext(Context);

//   return (
//     <div id="loginFormAndPhoto">
//       <img
//         id="loginPhoto"
//         style={{ height: "auto", width: "50%" }}
//         src={sunsetImg}
//       ></img>
//       <form
//         style={{
//           width: "50%",
//           margin: "10px",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             textAlign: "center",
//           }}
//         >
//           <i
//             className="fa-solid fa-circle-user fa-2xl"
//             style={{ marginTop: "12px" }}
//           ></i>
//           <p style={{ marginTop: "12px" }}>Sign In</p>
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             id="inputEmail"
//             placeholder="Email Address"
//           ></input>
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             id="inputPassword"
//             placeholder="Password"
//           ></input>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="flexCheckIndeterminate"
//           ></input>
//           <label className="form-check-label" for="flexCheckIndeterminate">
//             Remember Me
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           style={{ marginTop: "15px" }}
//         >
//           Submit
//         </button>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <Link to="/formForgotPassword">
//             {" "}
//             <div style={{ marginTop: "20px" }}>ForgotPassword?</div>
//           </Link>
//           <Link to="/formSignup">
//             <div style={{ marginTop: "20px" }}>
//               Don't have an account? Sign Up
//             </div>
//           </Link>
//         </div>
//       </form>

//       {/* <div className="forgotPasswordBtn">
// 				<Link to="/formForgotPassword">
// 					<button className="forgotPassword">ForgotPassword</button>
// 				</Link>
// 			</div>
// 			<div className="signUpBtn">
// 				<Link to="/FormSignup">
// 					<button className="signUp">Sign Up</button>
// 				</Link>
// 			</div> */}
//     </div>
//   );
// };
