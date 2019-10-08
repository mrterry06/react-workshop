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
        <p>What you will be doing:</p>
        <ul>
          <li>Make an InputField component(this is already done)</li>
          <li>
            Refactor the workshop page with your component and generate 3 fields
            (First Name, Last Name, and Email)
          </li>
          <li>Add a submit button that submits the form</li>
          <li>Add validations and limit user input</li>
          <li>Watch test succeed</li>
        </ul>
        <hr />
        <CreateUserForm />
      </div>
    );
  }
}
