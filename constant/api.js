/**
 * declaration of all the endpoints
 */

export default {
  /* path to BE APIs */
  endpoints: {
    get_place_autocomplete: "maps/api/place/autocomplete/json",
    get_place_details: "maps/api/place/details/json"
  },

  /* path to NextJS APIs */
  proxy: {
    get_place_autocomplete: "/api/proxy/place/autocomplete"
  },
  fixture: {
    get_place_autocomplete: "/api/fixture/place/autocomplete",
    get_place_details: "/api/fixture/place/details"
  }
};
