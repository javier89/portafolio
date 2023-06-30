import React, { Component } from 'react'

export default class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>
                      </p>
                      <cite>Steve Jobs</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                      </p>
                      <cite>Mr. Adobe</cite>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
        </div> 
      </section>
    )
  }
}