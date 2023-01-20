// import React from 'react'

// export default function About(props) {
  
//     return (
//     <div className='container'>
//         <h1 className={`my-2 text-${props.mode === 'light'?'dark':'light'}`}>About Us</h1>
//         <div className="accordion" id="accordionExample">
//         <div className="accordion-item">
//             <div id="collapseOne" className="show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//             <div className={`accordion-body text-${props.mode === 'dark'?'light':'dark'}`} style={{backgroundColor: props.mode==='dark'?'#010c0f':'white'}}>
//                 Myself Taraansh. I am currently a student of Btech IT from Guru Jambheshwar University of Science and Technology.
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

import React from 'react'

export default function About(props) {
let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#010c0f':'white'
}

    return (
    <div className='container' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze Your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free To Use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character too that provides instant character count and word count statistics for a given text.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This Word counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}