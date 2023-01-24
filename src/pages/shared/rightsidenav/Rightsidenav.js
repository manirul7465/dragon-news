import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Brandcarousel from '../brandcorousel/Brandcarousel';
import { AuthContext } from '../../../conext/Authprovider/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';

const Rightsidenav = () => {


    const { providrLogin } = useContext(AuthContext);
    const googleprovider = new GoogleAuthProvider();

    const handlegooglesignin = () => {

        providrLogin(googleprovider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handlegooglesignin} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> login with google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> login with github</Button>
            </ButtonGroup>
            <div>
                <h2 className='mt-4'>Find us on</h2>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> whatsup</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>  twitch</ListGroup.Item>

                </ListGroup>
            </div>
            <div>
                <Brandcarousel></Brandcarousel>
            </div>
        </div>
    );
};

export default Rightsidenav;