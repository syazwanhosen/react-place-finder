/**
 * in case we wanna use next server as API server
 * we can make use as a mock server for mock data
 * https://nextjs.org/docs/api-routes/introduction
 */

import { PLACE_DETAILS_FIXTURE } from "~/fixtures";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { placeId } = req.query;

    const findPlaceDetails = PLACE_DETAILS_FIXTURE.result.filter(
      ({ place_id }) => place_id === placeId
    );

    res.status(200).json(findPlaceDetails);
  }
}
