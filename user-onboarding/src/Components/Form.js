import React from 'react';

const Form = (props) => {

    const handleChange = (event) => {
        const {name, value, checked, type} = event.target;
        const newVal = type === "checkbox" ? checked : value;
        props.change(name, newVal);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit();
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" placeholder="Enter First Name Here" value={props.form.fname} onChange={handleChange} />
                <p>{props.errors.fname}</p>
                <label htmlFor="fname">Last Name</label>
                <input type="text" name="lname" placeholder="Enter Last Name Here" value={props.form.lname} onChange={handleChange} />
                <p>{props.errors.lname}</p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter Email Here" value={props.form.email} onChange={handleChange} />
                <p>{props.errors.email}</p>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter Password Here" value={props.form.password} onChange={handleChange} />
                <p>{props.errors.password}</p>
                <label htmlFor="terms">Terms of Service</label>
                <input type="checkbox" name="terms" checked={props.form.terms} onChange={handleChange} />
                <p>{props.errors.terms}</p>
                <input id="submit" type="submit" />
            </form>
        </div>
    )
}

export default Form;