import React, { useState } from 'react'
import UserServices from '../services/UserServices';
import { useNavigate } from 'react-router-dom';


// component for takig users details
export default function RegistrationComponent() {

  // user json 
    const [user,setUser] = useState({
      fullName :'',
        age : 65 ,
	 email : '',	
 password : '',
	 addressLine1 : ''
	,
	 city : '',
 gender : '',
	 role :'USER',
    }) ;
    const navigate = useNavigate();

    // on click event to initialise specific name with specific value in usser json
    const upData = (event)=> {
        event.preventDefault();
        setUser({...user, [event.target.name] : event.target.value});
    }


    // submit event in this we are transfering our user details to service layeer and after sucessful entry shows
    // alert with name and navigate to home page
    const sbmt = (event) => {
        event.preventDefault();
        UserServices.adduser(user).then((res)=>{
            console.log(res.data);
            alert('registration sucess ' + res.data.fullName)
            navigate('/');
        }).catch((err)=> {
            console.log(err)
        })
    }
  return (
    <div className='row mt-5' style={{textAlign :'center'}}>
        <div className='col-lg-3 col-sm-12'></div>
        <div className='col-lg-6 col-sm-12'>
        <h1>Register</h1>
        <form onSubmit={sbmt}>
        <div className="mb-3" >
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" required name='fullName' onChange={upData} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your full Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput2" className="form-label">Enter Email</label>
  <input type="email" required name='email' onChange={upData} className="form-control" id="exampleFormControlInput2" placeholder="abc@gmail.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput3" className="form-label">Choose Password</label>
  <input type="password" required name='password' onChange={upData} className="form-control" id="exampleFormControlInput3" placeholder="Enter Password"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput4" className="form-label">Enter Age</label>
  <input type="number" required min={65} name='age' onChange={upData} className="form-control" id="exampleFormControlInput4" placeholder="Enter Age"/>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" required  onChange={upData} type="radio" name="gender" id="inlineRadio1" value="MALE"/>
  <label class="form-check-label"  for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" required onChange={upData} type="radio" name="gender" id="inlineRadio2" value="FEMALE"/>
  <label class="form-check-label"  for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" required onChange={upData} type="radio" name="gender" id="inlineRadio3" value="OTHER" />
  <label class="form-check-label" for="inlineRadio3">Other</label>
</div>
<br></br><br></br>
<div className="mb-3" >
  <label for="exampleFormControlInput5" className="form-label">Address Line One</label>
  <input type="text" name='addressLine1' required onChange={upData} className="form-control" id="exampleFormControlInput5" placeholder="Enter Address Line One"/>
</div>
<div className="mb-3" >
  <label for="exampleFormControlInput6" className="form-label">City</label>
  <input type="text" name = 'city' required onChange={upData} className="form-control" id="exampleFormControlInput6" placeholder="City"/>
</div>

<button type="submit" class="btn btn-primary">Submit</button>

        </form>

        </div>
        <div className='col-lg-3 col-sm-12'></div>
      
    </div>
  )
}
