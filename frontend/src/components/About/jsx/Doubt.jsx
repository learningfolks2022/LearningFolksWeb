import React from 'react' ;
import "../css/DoubtStyles.css" ;

const Doubt = () => {

  return (
    <>
    <div className='doubt_section'>
            <h1>Doubts ?</h1>
    </div>
    <form action="https://formsubmit.co/cdc3737f44dd7645287df2c375cf9fd0" method="POST">
    <div className='form_doubt_section' >
        <div>
        <input type="text" name="name" placeholder='Name' />
        </div>
        <div>
        <input type="email" name="email" placeholder='Email' />
        </div> 
        <div>
        <input type="tel" name="phoneno" placeholder='Phone No.' />
        </div>
        <div>
        <input type="hidden" name="_next" value="https://www.learningfolks.in/about" />
        </div>
        <div>
        <input type="hidden" name="_captcha" value="false" />
        </div>
        <div>
        <textarea type="text" name="description" placeholder='Write Your Doubt Here...' />
        </div>
        <div>
            <button type="submit" className='send_button_doubt_section'>Send</button>
        </div>
        </div>
    </form>
    </>
  )
}

export default Doubt