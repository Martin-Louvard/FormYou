import React from 'react';


const Register = () => {
    const [passwordValue, setPasswordValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [firstNameValue, setFirstNameValue] = React.useState("");
    const [lastNameValue, setLastNameValue] = React.useState("");
    const [roleValue, setRoleValue] = React.useState("");




    const handleChangeEmail = (event) => {
        setEmailValue(event.target.value);
    };

    const handleChangeFirstName = (event) => {
        setFirstNameValue(event.target.value);
    };

    const handleChangeLastName = (event) => {
        setLastNameValue(event.target.value);
    };

    const handleChangeRole = (event) => {
        setRoleValue(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPasswordValue(event.target.value);
    };

  const handleSubmit = (event)=>{
    event.preventDefault();

    const data = {
        email: emailValue,
        password: passwordValue,
        first_name: firstNameValue, 
        last_name: lastNameValue,
        role: roleValue
      };
      
      fetch('http://localhost:1337/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response)=>response.json())
  };


    return (
        <div className="Register">
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email :
          <input type="text" value={emailValue} onChange={handleChangeEmail} />
                </label>
                <br></br>
                <br></br>

                <label>
                    First Name :
          <input type="text" value={firstNameValue} onChange={handleChangeFirstName} />
                </label>
                <br></br>
                <br></br>

                <label>
                    Last Name :
          <input type="text" value={lastNameValue} onChange={handleChangeLastName} />
                </label>
                <br></br>
        <br></br>

                <label>
                    Role :
                    <select value={roleValue} onChange={handleChangeRole}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
                </label>
                <br></br>
                <br></br>

                <label>
                    Password :
          <input type="text" value={passwordValue} onChange={handleChangePassword} />
                </label>
                <br></br>
                <br></br>

                <input type="submit" value="Envoyer" />
            </form>

        </div>
    );
}

export default Register