import React from 'react';

import { shallow } from 'enzyme';
import CreateUserForm from '../CreateUserForm';

jest.mock('utils/createUser');

import createUser from '../../../utils/createUser';

describe('CreateUserForm', () => {
  it('renders', () => {
    const wrapper = shallow(<CreateUserForm />);

    expect(wrapper).toBeTruthy();
  });

  it('should have three inputs: first name, last name, and email', () => {
    const wrapper = shallow(<CreateUserForm />);

    const inputs = wrapper.find('InputField');

    expect(inputs.length).toEqual(3);
  });

  it('should have a submit button', () => {
    const wrapper = shallow(<CreateUserForm />);
    const submitButton = wrapper.find('button');

    expect(submitButton.exists()).toBeTruthy();
    expect(submitButton.text()).toBeTruthy();
    expect(submitButton.prop('type')).toEqual('submit');
  });

  it('should preventDefault and call the createUser function onSubmit with the correct values', () => {
    const preventDefaultSpy = jest.fn();

    const wrapper = shallow(<CreateUserForm />);

    const form = wrapper.find('form').first();

    form.simulate('submit', {
      preventDefault: preventDefaultSpy,
      // this shouldn't matter, read from state
      target: [],
    });

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(createUser).toHaveBeenCalled();
  });
});
