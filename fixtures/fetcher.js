// /**
//  * Simple fetcher for fixture data
//  */

import apisauce from "apisauce";
import API from "constant/api";

const create = () => {
  const api = apisauce.create({
    headers: {
      Accept: "application/json"
    }
  });

  const getPlace = input =>
    api.get(API.fixture.get_place_autocomplete, { input });

  const getPlaceDetails = placeId =>
    api.get(API.fixture.get_place_details, { placeId });

  return { getPlace, getPlaceDetails };
};

export default {
  create
};
