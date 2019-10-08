import React from 'react';
import { Helmet } from 'react-helmet';
import CreateUserForm from 'components/CreateUserForm';
import './style.scss';

export default class WorkshopPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="workshop-page">
        <Helmet>
          <title>Workshop Page</title>
        </Helmet>
        <h3>What you will be doing:</h3>
        <p>
          You will be making a form to create a new user. There are tests to
          guide you throught the acceptance criteria. Use them to guide what you
          write. Run <code>npm run test:watch</code> in your terminal to run the
          tests.
        </p>

        <ol>
          <li>
            Edit the <code>InputField</code> component to take{' '}
            <code>name, label, onChange, and value</code> props
          </li>
          <li>
            Edit the <code>CreateUserForm</code> component to use the{' '}
            <code>InputField</code> component. Generate 3 inputs:
            <ol>
              <li>First Name</li>
              <li>Last Name</li>
              <li>Email</li>
            </ol>
          </li>
          <li>
            Add a <code>submit</code> button to <code>CreateUserForm</code> that
            submits the form. Call the <code>createUser</code> function located
            in <code>utils/createUser</code> in your submit and handle the
            promise it returns accordingly
          </li>
          <li>Bonus: Add validations! I'll give you twizzlers</li>
        </ol>
        <hr />

        <CreateUserForm />
      </div>
    );
  }
}
