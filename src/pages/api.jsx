import { formFailure, formRequest, formsuccess, githubSearch, loginSuccess } from "../redux/action";

export const formRegistration = (payload) => (dispatch) =>  {
         const requestAction = formRequest();
         dispatch(requestAction)    
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
         name : payload.name,
         email:payload.email,
         password:payload.password,
         number : payload.number,
         username:payload.username,
         description:payload.description
      })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res,"res")
           dispatch(formsuccess(res))
      })
      .catch((res) => {
        dispatch(formFailure())
      });
}

export const auth  = (email,password) => (dispatch) =>  {
     dispatch(formRequest())
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks" , {
      method : "get",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((res) => res.json() )
    .then((res) => {
      return res
      
    })
    .catch((err) => {
      console.log(err)
    })
}

export const fetchRequest = (query,page) => (dispatch) =>  {
     dispatch(formRequest())
  return fetch(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(githubSearch(res))
      return res
    })
    .catch((err) => {
       dispatch(formFailure())
    });
};