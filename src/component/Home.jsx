import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/styles/style.css"
import logo from "../assets/image/logo.png"
import first from "../assets/image/first.png"
import second from "../assets/image/second.png"
import third from "../assets/image/third.png"
const Hostnav = () => {
    const hostlinks = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/',
            name: 'About'
        },
        {
            path: '/',
            name: 'Sevices'
        },
        {
            path: '/',
            name: 'Contact'
        }
    ];

    return hostlinks;
};

const Home = () => {
    const hostlinks = Hostnav();

    return (
        <div >
            <div className="cover">
                <div className="large">
                    <div className="big-container">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div >
                        <div className="nav">
                            {
                                hostlinks.map((link, index) => (
                                    <NavLink key={index} to={link.path} className="nav-link" >{link.name}</NavLink>
                                ))
                            }
                        </div>
                        <div className="btn">
                            <button>Make an appointment</button>
                        </div>

                    </div>
                </div>
                <div className="hero-section">
                    <div className="hero">
                        <h2>Your Child's Safety, Our Lifelong Commitment</h2>
                        <p>At Legacy with a purpose,We're  dedicated to providing a nurturing and stimulating environment for your little ones. Explore our programs and discover the joy of early childhood education. </p>
                        <button className='btn2 push'>Learn More</button>
                    </div>
                    <div className="hero-png">
                        <img src={first} alt="" />
                    </div>
                </div>
                <div className="hero2">
                    <div className="head">
                        <h1>About Us </h1>
                    </div>
                    <div className="clip">
                        <div className="about">
                            <h2>Founded with Love and Learning in Mind</h2>
                            <p> Legacy with a purpose is a place where children thrive. Our journey began with a simple idea:to create a heaven where every child feels at home,loved and insipred,since [Year Established],our dedicated team of educators and caregivers has been committed to providing exceptional childcare services and building lasting relationships with children and <br />parents.  </p>
                            <button className='btn2 push2 '>Read More</button>
                        </div>
                        <div className="about-png">
                            <img src={second} alt="" />
                        </div>
                    </div>

                    <div className="head2">
                        <div className="head2pa">
                            <h1>Our Program</h1>
                        </div>
                        <div className="allflex-body">
                            <div className="flex1">
                                <div className="col1">
                                    <h2>Infant Care</h2>
                                    <p>In our infant care program we provide a safe and loving environment for your youngest family member.</p>
                                </div>
                                <div className="col2">
                                    <h2>Enrichment Activities</h2>
                                    <p>Our Enrichment activites program includes a variety of extracurricular options, from art and music to sports and science. It's an opportunity for your child to explore their interests and talents.</p>
                                </div>
                            </div>
                            <div className="program-image">
                                <img src={third} alt="" />
                            </div>
                            <div className="flex2">
                                <div className="second-col">
                                    <h2>After-school Care </h2>
                                    <p>For school-age children,Our after school care program is the perfect place to unwind and continue Learning</p>
                                </div>
                                <div className="clo3">
                                    <h2>Preschool Programs </h2>
                                    <p>We follow a play based curriculum that encourages exploration, problem solving and early social interactions. Your child will embark on a journey of discovery while building essential skills for the future.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero3">
                        <h1>Finally, Childcare You Can Trust</h1>
                        <p>At cloudy nursury,we understand that entrusting your child's care and education to others is a big decision. That's why we are dedicated to providing you with a childcare experience that exceeds your expectations annd earn your trust </p>
                        <button className='btn3 move'>Book Online</button>
                    </div>
                    <div className="footer">
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
