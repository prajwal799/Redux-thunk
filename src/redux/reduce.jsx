import { Component } from "react"
import { componetes } from "./actionType"

const initState = {
    form:[],
    token:null,
    isLoading : false,
    isError:false,
    auth:false,
    github : [],
    githubopen:false
}

const reduce = ( state = initState , {type,payload}) => {
    switch(type){
        case componetes.GITHUB_SEARCH : {
            console.log(payload,"sdjlkskafkla")
            return {
                ...state,
                github  : payload,
                githubopen : true
            }
        }
        case componetes.FORM_REQUEST : {
            return {
                ...state,
                isLoading : true
            }
        }
        case componetes.LOGIN_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                auth : true
            }
        }
        case componetes.FORM_SUCCESS : {
            return {
                ...state,
                form : payload.form
            }
        }
        case componetes.FORM_REGISTRATION: {
            return{
                ...state,
                form:payload.form,
                isLoading : false
            }
         }
         case componetes.FORM_FAILURE : {
             return {
                 ...state,
                 isError:true,
                 isLoading:false
             }
         }
         case componetes.FORM_LOGIN:{
             return{
                 ...state,
                 auth:true,
                 token:payload
             }
         }
         

        default :
               return state
           
       }
}
export default reduce