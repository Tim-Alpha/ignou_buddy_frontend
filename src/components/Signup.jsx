import React from 'react'


const Signup = () => {
  return (
    <div className='signupContainer'>
      <div className="image">
        <div className="icontainer">
          <div className="roofleft">

          </div>
          <div className="roofright">

          </div>
        </div>
        <div className="itext">IGNOU BUDDY</div>
        <div className="logo">
          <span className='iWord'>A Friend and Guide</span>
        </div>
      </div>
      <div className="registration">

        <div className="rContainer">

          <div className="inputs">
            <div className="input">
              <input type="text"
                placeholder='Full Name'

              />
            </div>
            <div className="input">
              <input type="email"
                placeholder='Email'

              />
            </div>
            <div className="input">
              <input type="tel"
                placeholder='Mobile Number'

              />
            </div>
            <div className="input">
              <input type="tel"
                placeholder='Enrollment Number'

              />
            </div>
            <div className="input">
              <input type="password"
                placeholder='Password'

              />
            </div>
            <div className="input">
              <input type="password"
                placeholder='Confirm Password'

              />
            </div>
          </div>
          <div className="footer_sign">
            <button className='signtag'>Sign Up</button>
            <div>
              Already have account
              <a href="" className='login'>Login</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup