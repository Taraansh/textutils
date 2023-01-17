import React from 'react'

export default function About(props) {
  
    return (
    <div className='container' >
        <h1 className={`my-2 text-${props.mode === 'light'?'dark':'light'}`}>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <div id="collapseOne" className="show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
                Myself Taraansh. I am currently a student of Btech IT from Guru Jambheshwar University of Science and Technology.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
