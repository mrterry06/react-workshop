import React from 'react';
import './style.scss';
import InputField from 'components/InputField';
import createUser from '../../utils/createUser';

function CreateUserForm(_props) {
  let [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const onChange = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        try {
          const response = await createUser(
            `${values.firstName} ${values.lastName}`,
            values.email,
          );
        } catch (e) {
          alert(e.message);
        }
      }}
    >
      {Object.entries(values).map(([key, value]) => (
        <InputField key={key} name={key} onChange={onChange} />
      ))}

      <button type="submit">Woooo</button>
    </form>
  );
}

CreateUserForm.propTypes = {};

export default CreateUserForm;
