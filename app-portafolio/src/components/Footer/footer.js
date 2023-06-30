import React, { Component } from 'react';

export default class Footer extends Component{
    render (){
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook"/></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"/></a></li>
                            <li><a href="#"><i className="fa fa-github" /></a></li>
                        </ul>
                        <ul>
                            <li>© Copyright 2023 Xaresi</li>
                            <li>Design by <a title="Styleshout" href='http://www.styleshout.com/'>Xaresi</a></li>
                        </ul>
                    </div>
                    <div id='go-top'><a className='smoothscroll' title='Back to Top' href='#home' ><i className='icon-up-open' /></a></div>
                </div>
            </footer>
        );
    }
}