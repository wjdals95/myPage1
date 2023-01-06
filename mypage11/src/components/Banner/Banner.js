import React from 'react';
import './Banner.css'

function Banner(props) {
    return (
        <div>
            <section id="mainBanner">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars2"></div>
                <div class="aniBox fixobj">
                <div class="bigTitle ofh font">
                    {/*  <p>JEONG MIN</p> */}
                    
                        <h1 data-shadow='JEONGMIN'>JEONGMIN</h1>
                    
                </div>
                <div class="blackline"></div>
                <div class="subTitle ofh">
                    <p>FRONTEND</p>
                </div>
            </div>
            
            </section>
        </div>
    );
}

export default Banner;