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
                <label>
                    First Name :
          <input type="text" value={firstNameValue} onChange={handleChangeFirstName} />
                </label>
                <label>
                    Last Name :
          <input type="text" value={lastNameValue} onChange={handleChangeLastName} />
                </label>
                <label>
                    Role :
          <input type="text" value={roleValue} onChange={handleChangeRole} />
                </label>
                <label>
                    Password :
          <input type="text" value={passwordValue} onChange={handleChangePassword} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>

        </div>
    );
}

export default Register