import axios from 'axios';
//import { editUser, deleteUser } from './api';


// const usersUrl = 'http://localhost:3003/users';
const URL = 'http://localhost:8000';

/*export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}*/

/*export const addStudent = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}*/

export const getUsers = async (id) => {
    try {
        return await axios.get(`${URL}/all`);
        
    } catch (error) {
        console.log('Error while calling getUsers API',error);
    }
   
}

export const getUser = async (id)=>{
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling getUser Api',error);
    }
}

export const editUser = async (user,id)=>{
    try {
        
        return await axios.put(`${URL}/${id}`,user);
    } catch (error) {
        console.log('Error while calling editUser Api',error);
    }
}

export const addStudent = async (data)=>{
    try {
        return await axios.post(`${URL}/add`,data);
    } catch (error) {
        console.log('Error while calling add User Api',error);
    }
}

export const deleteUser = async (id)=>{
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteUser Api',error);
    }
}




/*export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}*/