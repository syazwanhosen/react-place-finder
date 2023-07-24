import { fetchBackend, buildPath, responseFromFetch } from "utils/backend";
import API from "~/constant/api";

export default async function handler(req, res) {
  if (req.method === "GET") {
    responseFromFetch(
      res,
      fetchBackend(buildPath(API.endpoints.get_place_autocomplete, req.query), {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
    );
  }
}
