import axios from "axios";

const API_URL = "http://localhost:8080/api";

const register = (firstName , middleName , lastName , username , password) => {
    return axios.post(API_URL +"user/signup" , {
        firstName , 
        middleName ,
        lastName ,
        username ,
        password 
    })
}

const login = async ( username , password) => {
    return axios.post(API_URL +"/auth" , {
        username ,
        password 
    } , { withCredentials: true } , {
        headers : {
            'Content-Type': 'application/json',
        }
    }).then(
        (res) => {
            return res.data
        }
    )
}

const getAllUser = async () => {
    return axios.get(API_URL +"/user/getAll" , { withCredentials: true } , {
        headers : {
            'Content-Type': 'application/json',
        }
    }).then(
        (res) => {
            return res.data
        }
    )
}

const checkAuth = async () => {
    return axios.get(API_URL + "/user/auth/me" , 
        { withCredentials: true }, {
            headers : {
                'Content-Type': 'application/json',
            }
        }).then( 
            (res) => {
                return res.data
            }
        )
}

const logoutUser = async () => {
    return axios.post(API_URL + "/user/logout" , {} ,
        { withCredentials: true }).then( 
            (res) => {
                return res.data
            }
        )
}

const AuthService = {
    register,
    login,
    getAllUser,
    checkAuth,
    logoutUser
}

export default AuthService;