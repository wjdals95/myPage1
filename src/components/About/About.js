import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About(props) {
    return (
        <div>
            <section id="myPage" className="border boder-white bg-dark text-white">
                <div className='container'>
                <h1 className="text-center">My Page</h1>
                <div id='AboutPhoto' className="d-flex position-relative">
                    <a href="#none" className="col-6">
                        <img src="./img/myphoto.jpeg" alt="" className="img-fluid rounded-circle"  />
                    </a>
                    <ul className="col-6 my-auto text-center">
                        <li><h2 className="my-4"><a href="#none" className="text-white text-decoration-none">wjdals992@naver.com</a></h2></li>
                        <li><h2 className="my-4"><a href="#none" className="text-white text-decoration-none">GITHUB</a></h2></li>
                        <li><h2 className="my-4"><a href="#none" className="text-white text-decoration-none">BLOG</a></h2></li>
                        <li><h2 className="my-4"><a href="#none" className="text-white text-decoration-none">INSTAGRAM</a></h2></li>
                    </ul>
                    
                </div>
                <div className="my-5">
                    어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
                    어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
                    어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
                    어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
                </div>
                </div>
             </section>
        </div>
    );
}

export default About;