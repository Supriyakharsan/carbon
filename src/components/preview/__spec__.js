import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import Preview from './preview';
import Detail from './../detail';

describe('Preview', () => {
  let wrapper;
  let children="This is some text";
  describe('when using default node', () => {  
    beforeEach(() => {
      wrapper = mount(
        <Detail icon="analysis">
          <Preview>
            {children}
          </Preview>
        </Detail>
      );
    });

    it('will mount correctly on document', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when invisible', () => {
    beforeEach(() => {
      wrapper = mount(
        <Preview isVisible={ false }>
          {children}
        </Preview>
      );
    });

    it('will mount correctly on document', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('will not render children', () => {
      expect(wrapper.html()).toBe(null);
    });
  });

  describe('when has not children', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <Detail icon="analysis">
          <Preview></Preview>
        </Detail>
      );
    });

    it('will mount correctly on document', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should be have placeholder', () => {
      expect(wrapper.find('.carbon-preview--placeholder').length).toBe(1);
    });
  });
});