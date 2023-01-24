import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../conext/Authprovider/Authprovider';
const Register = () => {


    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserprofile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleemailverification();
                toast.success('please veryfi your email before login')

            })
            .catch(e => {
                console.error(e);
                setError(e.message)
            });

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserprofile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleemailverification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }


    const handleaccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div>
            <h1>register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>your name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="you name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="photoUrl" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleaccepted} type="checkbox" label={<>accept <Link to="/terms">terms and condition</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    register
                </Button>
                <Link to="/login">
                    <Button className='m-2' >
                        go -login
                    </Button></Link>
                <Form.Text className="text-danger" >
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;