/*{import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addStudent} from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
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

const AddStudent = () => {
    const [user, setUser] = useState(initialValue);
    const { name, id_number, email, phone } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addStudentDetails = async() => {
        await addStudent(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Student</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Studnet ID Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={id_number} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addStudentDetails()}>Add Student</Button>
            </FormControl>
        </Container>
    )
}

export default AddStudent;}*/

 /* const AddStudent = () => {
    return (
        <p>Hello Students</p>
    )
  }


  export default AddStudent;*/

import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addStudent} from '../Service/api';
import { useNavigate } from 'react-router-dom';

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

const AddStudent = () => {
    const [user, setUser] = useState(defaultValue);
    
    const navigate = useNavigate();


    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addStudentDetails = async() => {
        await addStudent(user);
        navigate('/all');
        
    }

    return (
        <Container>
            <Typography variant="h4">Add Student</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'   />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Studnet ID Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='id_number'  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email'  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Student Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone'   />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addStudentDetails()}>Add Student</Button>
            </FormControl>
        </Container>
    )
}

export default AddStudent;