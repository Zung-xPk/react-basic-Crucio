import React from 'react';
import logo1 from '../../assets/images/logo-1.png';
import team1 from '../../assets/images/team1.jpg';


class MyComponents extends React.Component {
    render() {
        return (
            <>
                <div class="preview_header">
                    <div class="logo">
                        <a href="#">Envato Market</a>
                    </div>
                    <div class="preview_right">
                        <div class="buy_now">
                            <a href="#">Buy now</a>
                        </div>
                    </div>
                </div>
                <div class="navbar">
                    <div class="navbar_container">
                        <a href="#" class="logo_home">
                            <img src={logo1} alt="CRUCIO" />
                        </a>
                        <div id="main_menu" class="main_menu">
                            <iconify-icon icon="ic:outline-menu"></iconify-icon>
                        </div>
                        <div class="main_navbar">
                            <ul>
                                <li>
                                    <a href="#home">HOME</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#services">SERVICES</a>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                                <li>
                                    <a href="#portf">PORTFOLIO</a>
                                </li>
                                <li>
                                    <a href="#blog">Blog</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="home" class="home" style={{ 'z-index': -1 }}>
                    <canvas id="reactive-bg-canvas"></canvas>
                    <div class="row text-center">
                        <h1>CRUCIO</h1>
                        <hr />
                        <h2>POWERFUL WEBSITES</h2>
                    </div>
                    <div class="text-center">
                        <a href="#about" class="scroll-down">
                            {/* <!-- <iconify-icon icon="ic:baseline-keyboard-arrow-down"></iconify-icon> --> */}
                        </a>
                    </div>
                </div>
                <div id="about" class="about">
                    <div class="about_text">
                        <div class="section-content text-center">

                            <h2>WELCOME TO <strong class="color">CRUCIO</strong></h2>
                            <h3>WE CREATE AWESOME WEBSITES</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum
                                dolore
                                eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
                                officia
                                deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div class="about_main">
                        <div class="about_main_cl" style={{ 'background-color': '#ad00ff' }}>
                            <div class="content_text">
                                <h3>RESPONSIVE</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquid ex ea commodi consequat.</p>
                            </div>
                        </div>
                        <div class="about_main_cl" style={{ 'background-color': '#8200bf' }}>
                            <div class="content_text">
                                <h3>CUSTOMIZABLE</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquid ex ea commodi consequat.</p>
                            </div>
                        </div>
                        <div class="about_main_cl" style={{ 'background-color': '#56007f' }}>
                            <div class="content_text">
                                <h3>MODERN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquid ex ea commodi consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="services" class="services">
                    <div class="about_text">
                        <div class="section-content text-center">

                            <h2>SERVICES</h2>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisci elit, sed eiusmod tempor
                                incidunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris
                                nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in
                                <strong>voluptate</strong>
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
                                proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div class="serv_main">
                        <div class="serv_content ">
                            <div class="serv_icon">
                                <ion-icon name="desktop-outline"></ion-icon>
                            </div>
                            <div class="serv_text">
                                <h4>WEB DESIGN</h4>
                            </div>
                        </div>
                        <div class="serv_content">
                            <div class="serv_icon">
                                <iconify-icon icon="ion:albums"></iconify-icon>
                            </div>
                            <div class="serv_text">
                                <h4>BRAND DESIGN</h4>
                            </div>
                        </div>
                        <div class="serv_content">
                            <div class="serv_icon">
                                <iconify-icon icon="ion:apps"></iconify-icon>
                            </div>
                            <div class="serv_text">
                                <h4>UI/UX DESIGN</h4>
                            </div>
                        </div>
                        <div class="serv_content">
                            <div class="serv_icon">
                                <iconify-icon icon="ion:color-palette"></iconify-icon>
                            </div>
                            <div class="serv_text">
                                <h4>GRAPHIC DESIGN</h4>
                            </div>
                        </div>


                    </div>
                    <div class="serv_main">
                        <div class="serv_content ">
                            <div class="serv_icon">
                                <iconify-icon icon="ion:camera-sharp"></iconify-icon>
                            </div>
                            <div class="serv_text">
                                <h4>PHOTOGRAPHY</h4>
                            </div>
                        </div>
                        <div class="serv_content">
                            <div class="serv_icon">
                                <iconify-icon icon="ion:videocam-sharp"></iconify-icon>
                            </div>
                            <div class="serv_text">
                                <h4>VIDEO EDITING</h4>
                            </div>
                        </div>
                        <div class="serv_content">
                            <div class="serv_icon">
                                <iconify-icon icon="ion:pulse"></iconify-icon>
                            </div>
                            <div class="serv_text">
                                <h4>DATA ANALYSIS</h4>
                            </div>
                        </div>
                        <div class="serv_content">
                            <div class="serv_icon">
                                <iconify-icon icon="ion:person-sharp"></iconify-icon>
                            </div>
                            <div class="serv_text">
                                <h4>CLIENT ASSISTANCE</h4>
                            </div>
                        </div>
                    </div>
                    <div class="serv_banner">
                        <div class="serv_banner_main text-center ">
                            <h2 class="animate__animated wow animate__fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">WE
                                CREATE
                                <strong>AWESOME</strong> PROJECTS</h2>
                            <a href="#" class="animate__animated wow animate__fadeInUp " data-wow-duration="1s"
                                data-wow-delay="0.5s">GET STARTED</a>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default MyComponents;