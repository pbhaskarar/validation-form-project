import React from 'react'

const Login = () => {
  return (
    <div>
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
    </div>
  )
}

export default Login