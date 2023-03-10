import {useState} from "react";
import './style.scss';
import Product from "../Product/Product"
//autorization
import {confirmationDB} from "../firebase-config"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
//write to db
import {DB} from "../firebase-config"
import {uid} from "uid"
import { set, ref, onValue, remove, update } from "firebase/database";


function BinComponent() {



   
    const [OTPDone, setOTPDone] = useState(false);
    const generateRecaptcha = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, confirmationDB);
    }

    const verifyOTP =() =>{
        let otp = document.getElementById('fcode').value;
        if(otp.length === 6)
        {
            document.getElementsByClassName("displayMessage")[0].innerHTML = ""
            //verifyOTP
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                setOTPDone(true)
                console.log(user)
            }).catch((error) => {
                //bad code
                document.getElementsByClassName("displayMessage")[0].innerHTML = "Сode entered incorrectly!"
            });
        }
    }
    const confirm =() =>{
        let phoneNumber = document.getElementById('fphone').value
        if (phoneNumber.length === 13){
            document.getElementsByClassName("displayMessage")[0].innerHTML = ""
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(confirmationDB, phoneNumber, appVerifier)
                .then(confirmationResult => {
                    window.confirmationResult = confirmationResult;
                }).catch((error) => {
                document.getElementsByClassName("displayMessage")[0].innerHTML = "Сode has been sent!"
                console.log(error);
            });
        }
        else{
            document.getElementsByClassName("displayMessage")[0].innerHTML = "Enter true phone number!"
        }
    }

    async function saveToDb() {
        let order = JSON.parse(localStorage.getItem('orderList'));
        console.log(order)
        // if(await ifOrderEmpty(order) === true)
        // {
        //     document.getElementsByClassName("displayMessage")[0].innerHTML = "Select product!"
        // }
        // else 
        if (OTPDone)
        {
            document.getElementsByClassName("displayMessage")[0].innerHTML = ""
            const uuid = uid();
            set(ref(DB, `/${uuid}`), {
                name : document.getElementById('ffirstname').value + document.getElementById('flastname').value,
                phoneNumber : document.getElementById('fphone').value,
                orderList : order,
                orderDate : Date.now(),
                deliveryAddress : document.getElementById('faddress').value,
                proofStatus : "notChecked", //  reject, accept
                uuid,
            })
            localStorage.clear();
        }
        else {
            document.getElementsByClassName("displayMessage")[0].innerHTML = "Send and confirm the code!"
        }
    }

    // async function ifOrderEmpty(orders) {
    //     let nullCount = 0;
    //     await orders.forEach( order =>{
    //         if(order.count == 0){
    //             nullCount++;
    //         }
    //     })
    //     if (nullCount == orders.length)
    //     {
    //         return true
    //     }
    //     else return false
    // }

    return(
        <>
<div>
        <div class="header__nav"> <a href="/#navigation"><img src="../img/logo1.png" alt=""/>
        </a>
        <a href="/#about">About us
        </a>
        <a href="/#shop">Products
        </a>
        <a href=""><img src="img/bin.png" alt=""/>
        </a>
        </div>    
        </div>   



        <div className="forms">
            <div className="forms__body">
                <div className="forms__initials">
                    <form>name:<br/>
                        <input type="text" name="firstname" id="ffirstname"/>
                    </form>
                    <form>surname:<br/>
                        <input type="text" name="lastname" id="flastname"/>
                    </form>
                </div>
                <div className="forms__number">
                    <form>number:<br/>
                        <input type="text" name="phone" id="fphone" defaultValue="+380"/>
                    </form>
                    <div className="forms__button" onClick={confirm}>SEND CODE</div>
                </div>
                <div id="recaptcha-container"></div>
                <div className="forms__code">
                    <form>CODE:<br/>
                        <input type="text" name="code" id="fcode" maxLength="6" onChange={verifyOTP}/>
                    </form>
                </div>
                <div className="forms__address">
                    <form>ADDRESS:<br/>
                        <input type="text" name="address" id="faddress"/>
                    </form>
                    <p className="displayMessage"></p>
                </div>
                <div className="forms__send">
                    <div className="forms__buy" onClick={saveToDb}>buy now</div>
                </div>
            </div>
            <div class="forms__products"> 
    {/* <div class="forms__product"><img src="img/card1.png" alt=""/>
      <div class="products__aboutbread"> 
        <h3>Lexma G88</h3><span>Mouse</span>
        <p>$22.69</p><a href=""><img src="img/trash.png" alt=""/></a>
      </div>
    </div> */}
    <Product variant="bin"/>
    
  </div>
        </div>


        <div class="contact"> 
  <p>Connect with us:</p><a href=""><img src="img/facebook.png" alt=""/></a><a href=""><img src="img/instagram.png" alt=""/></a><a href=""><img src="img/twitter.png" alt=""/></a><a href=""><img src="img/linkedin.png" alt=""/></a><a href=""><img src="img/youtube.png" alt=""/></a>
  </div>






        </>






    );
}

export default BinComponent