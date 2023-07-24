import apisauce from "apisauce";
import API from "../constant/api";

const create = () => {
  const api = apisauce.create({
    headers: {
      Accept: "application/json"
    },
    // 10 second timeout...
    timeout: 10000
  });

  /**
   * created to return array of autocomplete suggestions
   * based on keyword inserted by users
   * @param { string}   input   keyword insert by user
   * @returns Promise<any>
   */

  const getPlace = input =>
    api.get(API.proxy.get_place_autocomplete, { input });

  const getPlaceDetails = place_id =>
    api.get(API.fixture.get_place_details, { place_id });

  return { getPlace, getPlaceDetails };
};

export default {
  create
};
