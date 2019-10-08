import React from 'react';
import './style.scss';
import InputField from 'components/InputField';
import createUser from '../../utils/createUser';

function CreateUserForm(props) {
  let [email, setEmail] = React.useState('');
  let [first, setFirst] = React.useState('');
  let [last, setLast] = React.useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createUser(`${first} ${last}`, email);
      }}
    >
      <InputField name="firstName" onChange={setFirst} value={first} />
      <InputField name="lastName" onChange={setLast} value={last} />
      <InputField name="email" onChange={setEmail} value={email} />

      <button type="submit">Woooo</button>
    </form>
  );
}

CreateUserForm.propTypes = {};

export default CreateUserForm;
