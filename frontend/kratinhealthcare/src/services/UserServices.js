import axiosServ from "./axiosServ"
//this function for login functionality
const login = (user)=> {
   return axiosServ.post('user/login', user);
}

//this function for adding user to database
const adduser = (user)=> {
    return axiosServ.post('user/add', user);
 }

 const adddisease = (disease,userId)=> {
   console.log(userId)
   return axiosServ.post(`user/addDisease/${userId}`, disease);
 }

 const getAllDisease = (userId)=> {
  return axiosServ.get('user/getDisease',{
      params: {
         userId : userId
      }
   })
 }

//  const getDiseaseTime = (userId)=> {
//    return axiosServ.get('user/disease/time',{
//        params: {
//           userId : userId
//        }
//     })
//   }

  const getOnlyTime = (userId)=> {
   return axiosServ.get('user/time',{
       params: {
          userId : userId
       }
    })
  }


export default {login,adduser, adddisease,getAllDisease,getOnlyTime}