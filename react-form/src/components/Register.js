import React from 'react'

const Register = () => {
  return (
    <form
        onSubmit={(e)=>{
            e.preventDefault();
            onsubmit("register")
        }}
        >

            <input type="text" name="email" />
            <input type="password" name="password" />
            <button type='submit'>submit</button>
        </form>
  )
}

export default Register