import React, { Component } from 'react';

export default class Contact extends Component{
    render(){
        return(
            <section id='contact'>
                <div className='row section-head'>
                    <div className='two columns header-col'>
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className='ten columns'>
                        <p className='lead'>
                            I hope this website gives you a sense of <b/>
                            who I am as a developer and a person, and I look <b/>
                            forward to connecting with you and learning more about <b/>
                            your projects and interests. Thank you for visiting!
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='eight columns'>
                        {/* form */}
                        <form action method='post' id='contactForm' name='contactForm'>
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name<span className="required"> *</span></label>
                                    <input type="text" defaultValue size={35} id="contactName" name="contactName"/>
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email<span className='required'> *</span></label>
                                    <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Message<span className="required"> *</span></label>
                                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                                </div>
                                <div>
                                    <button className="submit">Submit</button>
                                    <span id="iamge-loader">
                                        <img alt src="images/loader.gif" />
                                    </span>
                                </div>
                            </fieldset>
                        </form> {/* Form End*/}
                        {/* contact-warning */}
                        <div id="message-warning">Error boy</div>
                        {/* contact-success */}
                        <div id="message-success">0
                            <i className='fa fa-check' /> Your message was sent, thank you!<br />
                        </div>
                    </div>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4> Address and Phone</h4>
                            <p className="address">
                                Caminito Encantado <br />
                                Col. la escondida, Fraccionamiento Paseos del Valle <br />
                                Zacatecas, Zac, Mex. CP 98173 <br />
                                <span>(+52) 492-181-9566</span>
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}