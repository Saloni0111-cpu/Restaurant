import React from 'react';
import {Link} from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">
                        About Us
                    </h1>
                    <p> The only thing we are serious about is food.</p>
                </div>
                <p className='mid'>
                At YumRush, our passion for food is at the heart of everything we do. We believe in creating memorable experiences with every bite, celebrating the joy and connection that comes from sharing a delicious meal. Whether its a quick snack or a gourmet feast, we bring the same level of dedication and love to every dish. Our mission is to serve food that not only satisfies your hunger but also brings a smile to your face..</p>
                    <Link to={"/"}>YumRush! At Your Service <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className='banner'>
                <img src='/about.png' alt='about'/>
            </div>
        </div>
        
    </section>
  )
}

export default About
