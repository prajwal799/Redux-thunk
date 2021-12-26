
import { componetes } from "./actionType"
import axios from "axios";

 
// export const formRegistration = (payload) => {
    
//     return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//          name : payload.name,
//          email:payload.email,
//          password:payload.password,
//          number : payload.number,
//          username:payload.username,
//          description:payload.description
//       })
//     })
//       .then((res) => res.json())
//       .then((res) => {
           
//       })
//       .catch((res) => {
        
//       });
// }

// export const auth  = (email,password) => {
//     return fetch("https://json-server-mocker-masai.herokuapp.com/tasks")
//     .then((res) => {
//       res.json()
//     })
//     .then((res) => {
//       return res.data
//     })
// }


export const formsuccess = (form) => {
  return{
    type : componetes.FORM_SUCCESS,
    payload : {
     form : form
    }
  }
}

export const loginSuccess = (payload) => {
  return{
    type : componetes.LOGIN_SUCCESS,
    payload : {
      auth:true
    }
  }
}
export const githubSearch = (data) => {
  return {
    type: componetes.GITHUB_SEARCH,
    payload : {
      github  : data
    }
  }
}
export const formRequest = (payload) => {
  return{
    type : componetes.FORM_REQUEST,
    payload : {
      isLoading : true
    }
  }
}

export const formFailure = (payload) => {
  return{
    type : componetes.FORM_FAILURE,
    payload : {
      isError : true
    }
  }
}
// export const formregist = (payload) => {
//   return{
//     type: componetes.FORM_REGISTRATION,
//     payload
//   }
// }
// export const loginauth = (payload) => {
//   return{
//     type: componetes.FORM_LOGIN,
//     payload
//   }
// }