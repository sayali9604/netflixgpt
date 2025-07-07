
export const checkValidData = (email, password) =>{
const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const isPasswordvalid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(password);

if(!isEmailValid) return "Email ID is not valid";
if(!isPasswordvalid) return "Password is not valid";
return null;
}