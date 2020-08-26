import React from 'react';
import axios from 'axios';
// import '../css/ContactLinks.css';

const ContactLinks = () => {
    const [name, setName] = ("");
    const [email, setEmail] = ("");
    const [message, setMessage] = ("");
    // const [buttonText, setButtonText] = ("Send");
    // const [sent, setSent] = (false);

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        // setButtonText("Sent!");
    }

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // setButtonText("...Sending");
        let data = {
            name: {name},
            email: {email},
            message: {message}
        }
        try {
            let res = axios.post('API_URI', data);
            // setSent(true);
            resetForm();
        } catch(err) {
            console.log('message not sent')
        }
    }

    return (
        <div class="jumbotron jumbotron-fluid" /*style={{"padding": "10vh 20vw", "background-color": "#043322"}}*/>
            <div>
                <p class="display-4">Contact Me</p>
            </div>
            <form className='form-group' onSubmit={handleEmailSubmit}>
                <input class="form-control" type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required='true'/>
                <input class="form-control" type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required='true'/>
                <textarea class="form-control" rows='8' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required='true'/>
                <button class="btn btn-outline-primary btn-block" type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ContactLinks;