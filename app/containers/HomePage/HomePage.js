/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Welcome to the React workshop</h2>
            <p>
              When you{'\''}re ready to begin, click to workshop tab to start.
              The purpose of this workshop is to get you familiar with the basics in React.js
            </p>
            <p>
              On the next screen{','} you will see 2 input fields{';'} First Name and Last name. In the code{','} you'll notice that we have written two
              identical inputfields with a slight configuration difference. <a href="/workshop">Click here to navigate and see</a>
            </p>
            <p>
              What you will be doing:
            </p>
            <ul>
              <li>Make an InputField component(this is already done, you just have to navigate to it)</li>
              <li>Refactor the workshop page with your component and generate 3 fields (First Name, Last Name, and Email)</li>
              <li>Add a submit button that submits the form</li>
              <li>Add validations and limit user input</li>
              <li>Watch test succeed</li>
            </ul>
            <strong>The mark of success is that all the test pass on InputField component, it submits the form with the input fields, and you get a response back</strong>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {};
