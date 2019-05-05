import { 
  getRandomFilm, 
  getCardData,
  getSubData
} from './apiCalls';

import { 
  mockFilmResponse,
  mockPeopleResponse,
  mockSpeciesResponse
} from './apiMockData'

describe('getRandomFilm', () => {
  let mockNum;

  beforeEach(() => {
    mockNum = 4;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFilmResponse)
      });
    });
  });

  it('should invoke fetch with the correct params', () => {
    const expected = `https://swapi.co/api/films/${mockNum}/`;

    getRandomFilm(mockNum);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should throw an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    await expect(getRandomFilm()).rejects.toEqual(Error('Film failed to load'));
  });

  it('should return a parsed response if response is ok', async () => {
    const result = await getRandomFilm(mockNum);

    expect(result).toEqual(mockFilmResponse);
  });
});

describe('getCardData', () => {
  let mockCategory;

  beforeEach(() => {
    mockCategory = 'people';
    
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPeopleResponse)
      });
    });
  });

  it('should invoke fetch with the correct params', () => {
    const expected = `https://swapi.co/api/${mockCategory}/`;

    getCardData(mockCategory);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should throw an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    await expect(getCardData(mockCategory)).rejects.toEqual(Error('Card data failed to load'));
  });

  it('should return a response if response is ok', async () => {
    const result = await getCardData(mockCategory);
    expect(result).toEqual(mockPeopleResponse);
  });
});

describe('getSubData', () => {
  let mockUrl;

  beforeEach(() => {
    mockUrl = `https://swapi.co/api/species/1/`;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockSpeciesResponse)
      });
    });
  });

  it('should call fetch with the correct params', () => {
    const expected = mockUrl;

    getSubData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should throw an error if response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    await expect(getSubData(mockUrl)).rejects.toEqual(Error('Data failed to load'));
  });

  it('should return a parsed response is response is ok', async () => {
    const result = await getSubData(mockUrl);

    expect(result ).toEqual(mockSpeciesResponse);
  });
});