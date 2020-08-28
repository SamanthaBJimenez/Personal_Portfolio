import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_o8FUfYii', e.target, 'user_O3tRVjUa8qiKKAuGdRJBS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div class="container">
            <div class="section-title">
                <h2>Contact</h2>
                <p>Feel free to reach out. Let's connect!</p>
            </div>
            <div class="row aos-init aos-animate" data-aos="fade-in">
                <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form onSubmit={handleSubmit} role="form" class="php-email-form">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="name">Your Name</label>
                                <input type="text" name="name" class="form-control" id="name"/>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Your Email</label>
                                <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email"/>
                                <div class="validate"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
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

export default Contact;