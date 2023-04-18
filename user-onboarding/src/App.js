import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Form from './Components/Form.js';
import schema from './Validation/formSchema.js';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    terms: ''
  });
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    terms: false
  });

  const onSubmit = () => {
    // setUsers([form, ...users]);
    axios.post('https://reqres.in/api/users', form)
      .then((response) => {
        setUsers([response.data, ...users]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormErrors({
          fname: '',
          lname: '',
          email: '',
          password: '',
          terms: ''});
        setForm({
          fname: '',
          lname: '',
          email: '',
          password: '',
          terms: false});
      });
  }

  const onChange = (name, value) => {
    validate(name, value);
    setForm({...form, [name]: value});
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}));
  }

  return (
    <div>
      <h1>User Onboarding</h1>
      <Form form={form} change={onChange} submit={onSubmit} errors={formErrors} />
      {users.map(user => {
        return(
          <div key={user.id}>
            <p className="user">{user.fname} {user.lname} created at {user.createdAt}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
