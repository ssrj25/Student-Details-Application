import  { useState,useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { editUser,getUser} from '../Service/api';
import { useNavigate,useParams } from 'react-router-dom';
//import { addStudent } from '../Service/api';
//import { getUser } from './../Service/api';

const defaultValue = {
    name: '',
    id_number: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EditStudent = () => {
    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();
    const {id}= useParams();

   /* useEffect(()=>{
        loadUserDetails();
},[])
    

    const loadUserDetails=async()=>{
        const response = await getUser(id);
       
        setUser(response.data);}*/
        useEffect(() => {
    const loadUserDetails = async () => {
      const response = await getUser(id);
      setUser(response.data);
    };

    loadUserDetails();
  }, [id]); // Include 'id' in the dependency array

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editStudentDetails = async() => {
        await editUser(user,id);
        navigate('/all');
        
    }

    return (
        <Container>
            <Typography variant="h4">Edit Student</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name}  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Studnet ID Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='id_number' value={user.id_number}  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email}  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone}   />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editStudentDetails()}>Edit Student</Button>
            </FormControl>
        </Container>
    )
}

export default EditStudent;