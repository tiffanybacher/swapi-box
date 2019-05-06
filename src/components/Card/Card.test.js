import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let mockCategory = 'people';
  let mockData = {
          "name": "Luke Skywalker",
          "height": "172",
          "mass": "77",
          "hair_color": "blond",
          "skin_color": "fair",
          "eye_color": "blue",
          "birth_year": "19BBY",
          "gender": "male",
          "homeworld": "https://swapi.co/api/planets/1/",
          "films": [
              "https://swapi.co/api/films/2/",
              "https://swapi.co/api/films/6/",
              "https://swapi.co/api/films/3/",
              "https://swapi.co/api/films/1/",
              "https://swapi.co/api/films/7/"
          ],
          "species": [
              "https://swapi.co/api/species/1/"
          ],
          "vehicles": [
              "https://swapi.co/api/vehicles/14/",
              "https://swapi.co/api/vehicles/30/"
          ],
          "starships": [
              "https://swapi.co/api/starships/12/",
              "https://swapi.co/api/starships/22/"
          ],
          "created": "2014-12-09T13:50:51.644000Z",
          "edited": "2014-12-20T21:17:56.891000Z",
          "url": "https://swapi.co/api/people/1/"
        }
  let mockPlanetData = {
    "name": "Coruscant",
    "rotation_period": "24",
    "orbital_period": "368",
    "diameter": "12240",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "cityscape, mountains",
    "surface_water": "unknown",
    "population": "1000000000000",
    "residents": [
        "https://swapi.co/api/people/34/",
        "https://swapi.co/api/people/55/",
        "https://swapi.co/api/people/74/"
    ],
    "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-10T11:54:13.921000Z",
    "edited": "2014-12-20T20:58:18.432000Z",
    "url": "https://swapi.co/api/planets/9/"
  }
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card 
        category={mockCategory} 
        data={mockData} 
        key={mockData.created}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      category: 'people',
      name: 'Luke Skywalker'
    });
  });

  describe('getSpeciesData', () => {
    it('should update state with species', async () => {
      await wrapper.instance().getSpeciesData();

      expect(wrapper.state('species')).toEqual('Human');
    });
  });

  describe('getHomeworldData', () => {
    it('should update state with homeworld name and population', async () => {
      await wrapper.instance().getHomeworldData();

      expect(wrapper.state('homeworld')).toEqual('Tatooine');

      expect(wrapper.state('population')).toEqual('200000');
    });
  });

  describe('getResidentsData', () => {
    it.skip('should set state with all the resident names', async () => {
      mockData = mockPlanetData;

      await wrapper.instance().getResidentsData();

      expect(wrapper.state('residents')).toEqual(['Finis Valorum', 'Adi Gallia', 'Jocasta Nu']);
    });
  });
});