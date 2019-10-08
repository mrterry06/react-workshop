import React from 'react';

import { shallow } from 'enzyme';
import InputField from '../InputField';

describe('InputField', () => {
  let onChangeSpy;
  let props;

  beforeEach(() => {
    onChangeSpy = jest.fn();

    props = {
      name: 'email',
      onChange: onChangeSpy,
    };
  });

  it('renders', () => {
    const wrapper = shallow(<InputField />);

    expect(wrapper).toBeTruthy();
  });

  describe('label', () => {
    it('has a label based on the name passed in', () => {
      const wrapper = shallow(<InputField {...props} />);
      const labelText = wrapper
        .find('label')
        .first()
        .text();

      expect(labelText).toEqual(props.name);
    });
  });

  describe('input', () => {
    it('should render an input with a placeholder', () => {
      const wrapper = shallow(<InputField {...props} />);

      const input = wrapper.find('input').first();

      expect(input.exists()).toBe(true);
      expect(input.prop('type')).toEqual('text');
      expect(input.prop('placeholder')).toEqual('email...');
    });

    it('should set input value via a value prop', () => {
      const expectedValue = 'ji.wang@grainger.com';

      const wrapper = shallow(<InputField value={expectedValue} />);

      const input = wrapper.find('input').first();

      expect(input.prop('value')).toEqual(expectedValue);
    });

    it("should call it's onChange prop when the input value changes", () => {
      const expectedValue = 'ji.wang@grainger.com';

      const wrapper = shallow(<InputField {...props} />);

      const input = wrapper.find('input').first();

      input.simulate('change', { target: { value: expectedValue } });

      // if the test fails on this, make sure you're calling
      // onChange with a value, not just an event
      expect(
        !Object.keys(onChangeSpy.mock.calls[0][0]).includes('target'),
      ).toBeTruthy();
      expect(onChangeSpy).toHaveBeenCalledWith(expectedValue);
    });
  });
});
