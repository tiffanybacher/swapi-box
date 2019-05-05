import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import { mockPeopleResponse } from '../../apiMockData';
import { getCardData } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('MainContainer', () => {
  let wrapper;
  let mockCategory;

  beforeEach(() => {
    wrapper = shallow(<MainContainer />);
    mockCategory = 'people';
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      category: '',
      data: '',
      CardHolderShown: false
    });
  });

  describe('setCardData', () => {
    beforeAll(() => {
      getCardData.mockImplementation(() => {
        return Promise.resolve(mockPeopleResponse)
      });
    });

    it.skip('should set state with the passed category', async () => {
      await wrapper.instance().setCardData(mockCategory);
      
      expect(wrapper.state('category')).toEqual(mockCategory);
    });

    it.skip('should set state with the response data', async () => {
      await wrapper.instance().setCardData(mockCategory);

      expect(wrapper.state('data')).toEqual(mockPeopleResponse);
    });

    it('should set state with an error status if fetch fails', async () => {
      await wrapper.instance().setCardData(mockCategory);

      expect(wrapper.state('errorStatus')).toEqual(`Failed to load ${mockCategory} data`);
    });
  });
});