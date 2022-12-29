import React from 'react';

import './MySkill.css'

function MySkill(props) {
    return (
        <div>
            <section id="skillPage" className="border-bottom boder-white bg-dark text-white ">
                <div className="container mt-5 ">
                <h1 className='ml-3'>My Skill Percent</h1>
                <div className="d-flex text-center my-5">
                    <div className="col-6">
                    어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
                    어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
                    </div>
                    <div className="col-6">
                    <h1>80%</h1>
                    </div>
                    
                </div>
                <div className='col-12 d-flex justify-content-around my-5'>
                    <div className='skill_round'></div>
                    <div className='skill_round'></div>
                    <div className='skill_round'></div>
                    <div className='skill_round'></div>
                    <div className='skill_round'></div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default MySkill;