import React from 'react';
import { shallow } from 'enzyme';
import ButtonContainer from './ButtonContainer';

describe('ButtonContainer', () => {
  let wrapper;
  let setCardDataMock;

  beforeEach(() => {
    setCardDataMock = jest.fn();
    wrapper = shallow(
      <ButtonContainer setCardData={setCardDataMock} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleClick', () => {
    // let event;

    // beforeEach(() => {
    //   event = {  }
    // });

    it('should invoke setCardData with the correct params when people btn is clicked', () => {
      const eventMock = { target: {name: 'people'}}

      wrapper.find('.peopleBtn').simulate('click', eventMock);

      expect(setCardDataMock).toHaveBeenCalledWith('people');
    });
    
    it('should invoke setCardData with the correct params when planets btn is clicked', () => {
      const eventMock = { target: {name: 'planets'}}

      wrapper.find('.planetsBtn').simulate('click', eventMock);

      expect(setCardDataMock).toHaveBeenCalledWith('planets');
    });
  
    it('should invoke setCardData with the correct params when vehicles btn is clicked', () => {
      const eventMock = { target: {name: 'vehicles'}}

      wrapper.find('.vehiclesBtn').simulate('click', eventMock);

      expect(setCardDataMock).toHaveBeenCalledWith('vehicles');
    });
  });
});
