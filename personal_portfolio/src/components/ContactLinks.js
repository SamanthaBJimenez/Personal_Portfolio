import React from 'react';
import axios from 'axios';

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
        <div class="container">
            <div class="section-title">
                <h2>Contact</h2>
                <p>Feel free to reach out. Let's connect!</p>
            </div>
            <div class="row aos-init aos-animate" data-aos="fade-in">
                <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="name">Your Name</label>
                                <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Your Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email"/>
                                <div class="validate"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Subject</label>
                            <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactLinks;