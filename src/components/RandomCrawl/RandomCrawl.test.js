import React from 'react';
import { shallow } from 'enzyme';
import RandomCrawl from './RandomCrawl';
import { getRandomFilm } from '../../apiCalls'
import mockFilmResponse from '../../apiMockData';

describe('RandomCrawl', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow ( <RandomCrawl /> );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({ film: {} });
  });

  describe('componentDidMount', () => {
    beforeAll(() => {
      getRandomFilm.mockImplementation(() => {
        return Promise.resolve(mockFilmResponse);
      });
    });

    it.skip('should invoke getRandomFilm on mount', async () => {
      const getRandomFilm = jest.fn();

      await wrapper.instance().componentDidMount();

      expect(getRandomFilm).toHaveBeenCalled();
    });

    it.skip('should set state to film response on mount', async () => {
      expect(wrapper.state()).toEqual({ film: {} });

      await wrapper.instance().componentDidMount();

      expect(wrapper.state()).toEqual({ film: mockFilmResponse });
    });

    it.skip('should set state with an error if fetch fails', async () => {
      getRandomFilm.mockImplementation(() => {
        return Promise.reject();
      });

      await wrapper.instance.componentDidMount();

      expect(wrapper.state('errorStatus')).toEqual('Error adding film');
    });
  });
});