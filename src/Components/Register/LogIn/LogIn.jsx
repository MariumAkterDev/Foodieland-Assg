import React, { useState } from 'react';
import './LogIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userData } from '../../../Slice/userSlice';


const LogIn = () => {
	// ===================== usestate for Eye Icon
	const [show, setShow] = useState(false)
	// ======================== usestate for input data 
	const [formData, setFormData] = useState({email:'' , password:''})
	//  ======================= usestate for Error 
	const[error, setError] = useState({emailError:'' , passwordError:''}) 
	// ============================================= Firebase variables
	const auth = getAuth();
	// =========================== Navigation variable
	const navigate = useNavigate()
	// =============================== store data in redux
	const dispatch = useDispatch()

// ==================================< Raw-Function area starts >============================================
	const handleLogIn = (e) =>{
		e.preventDefault()
		if(formData.email == ''){
			setError((prev)=>({...prev ,emailError:'Email is required!'}))
		}
		if(formData.password == ''){
			setError((prev)=>({...prev , passwordError:'Password is required!'}))
		}else{
			signInWithEmailAndPassword(auth, formData.email, formData.password)
			.then((userCredential) => {
				const user = userCredential.user;
				if(user.emailVerified == true){
					// ------------------------------------> Navigate to the Home Page
					navigate('/');
					// ----------------------- login success toast
					toast.success('LogIn Success', {
						position: "top-center",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
					});
					// ------------------------- storing/sending user data to redux
					dispatch(userData(user))
					localStorage.setItem('currentUser' , JSON.stringify(user))

				}else{
					// ------------------------ toast for email not varified
					toast.warning('Email is not verified!', {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
					});
				}
				
			})
			.catch((error) => {
				const errorCode = error.code;
				if(errorCode){
					// ------------------------ toast for email and password error
					toast.error('Something went wrong!', {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
					});
				}
			});
		}
	}
	// ----------------------------------------< Raw-Function area ends >-----------------------------
	return (
		<>
			<div className="main">
				<div className="container">
					<div className="shorna_con">
						<div className="cardLog">
							<div className="cardTxtOne">
								Welcome back to <span className="text-[#7747ff]">App</span>
							</div>
							<div className="cardTxtTwo ">
								Log in to your account
							</div>
							<form className="log_Form ">
								<div className=" shorna-janina ">
									<label className="shorna-janinaOne">Email</label>
									<input onChange={(e)=>{setFormData((prev)=>({...prev ,email:e.target.value})) , setError((prev)=>({...prev ,emailError:''}))}} type="email" className="emailInp"/>									
									<p className='text-[12px] text-[red] py-1'>{error.emailError}</p>
								</div>
								<div className="block relative">
									<label className="passInp ">Password</label>															
									<input className="passTxt" onChange={(e)=>{setFormData((prev)=>({...prev ,password:e.target.value})), setError((prev)=>({...prev , passwordError:''}))}} type={show? 'text' : 'password'} />
									{
										show?
										<FaRegEye onClick={()=>setShow(!show)} className='openEye' />
										:
										<FaRegEyeSlash onClick={()=>setShow(!show)} className='closeEye' />
									}
									<p className='text-[12px] text-[red] py-1'>{error.passwordError}</p>				
								</div>
								<div>
									<a className="forgot" href="#">Forgot your password?</a>
								</div>
								<button onClick={handleLogIn} type="submit" className="subBtn">LogIn</button>
							</form>
							<div className="accTxt">Don’t have an account yet?{' '}
								<Link className="regTxt" to="/LayoutTwo">Register for free!</Link>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LogIn;
