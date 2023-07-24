/**
 * in case we wanna use next server as API server
 * we can make use as a mock server for mock data
 * https://nextjs.org/docs/api-routes/introduction
 */

import { PLACE_AUTOCOMPLETE_FIXTURE } from "~/fixtures";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { input } = req.query;

    const filterPlace = PLACE_AUTOCOMPLETE_FIXTURE.predictions
      .map(({ description, place_id }) => ({ description, place_id }))
      .filter(({ description }) => description.includes(input));

    res.status(200).json(filterPlace);
  }
}
