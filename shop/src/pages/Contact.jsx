import React from "react";
import { NavLink } from 'react-router-dom'

const Contact = () => { 
    return ( 
        <section className="page">
            <h1>Contact Page</h1>

            <section className="contact-page">
                <section className="contact-options">
                    <ul>
                        <li>
                            <img src="https://picsum.photos/id/237/200/300" width= "350px" height= "350px" alt="..loading" />
                        </li>
                        <li>
                            <img src="https://picsum.photos/id/237/200/300" width= "350px" height= "350px" alt="...loading" />
                        </li>
                        <li>
                            <img src="https://picsum.photos/id/237/200/300" width= "350px" height= "350px" alt="...loading" />
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    )
};

export default Contact;