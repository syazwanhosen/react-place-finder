const querystring = require("querystring");
/**
 * Call backend API using fetch() pre-defined with the base URL & API key
 * @param {string} path The path of the API endpoint relative to Gravitee gateway base
 * @param {Object} config The configuration for the underlying fetch() function
 * @returns Promise The return value of fetch()
 */
const fetchBackend = async (path, config = { method: "GET" }) => {
  const apiKeyHeader = process.env.API_KEY_HEADER || "key";
  const apiKeyValue = process.env.NEXT_PUBLIC_API_KEY;
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (typeof window !== "undefined") {
    throw new Error(
      "Coding Error: fetchBackend should not be called from client-side code in order to protect API key"
    );
  }
  config.headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    ...(config.headers || {}),
    [apiKeyHeader]: apiKeyValue
  };
  const apiUrl = `${apiBaseUrl}${path}`;
  if (!(process.env.NODE_ENV || "").startsWith("prod")) {
    console.log(`Calling ${config.method} ${apiUrl} ...`);
  }
  return fetch(apiUrl, config);
};

/**
 * Append path with query string that is built from the provided object
 * @param {string} path The original path (it may have existing query string)
 * @param {Object} queryParams The plain Object from which query string will be built
 * @returns string the path appended with query string
 */
const buildPath = (path, queryParams = {}) => {
  // if path already has query parameters, parse it and append queryObject to it
  let qmarkpos = path.indexOf("?");
  if (qmarkpos > -1) {
    queryParams = {
      ...querystring.parse(path.substr(qmarkpos + 1)),
      ...queryParams
    };
    path = path.substr(0, qmarkpos);
  }
  return (
    path +
    (Object.keys(queryParams).length > 0
      ? `?${new URLSearchParams(queryParams)}`
      : "")
  );
};

/**
 * Use the return value of a fetch call to complete a response helper (of an API route handler)
 * @param {NextApiResponse} response The response helper of an API route handler
 * @param {Promise} fetchPromise The Promise object returned by a fetch() call
 */
const responseFromFetch = (response, fetchPromise) => {
  fetchPromise
    .then(r => {
      return response.status(r.status).json(r.body);
    })
    .catch(error => {
      response.status(500).json({ error });
      console.log(error);
    });
};
export { fetchBackend, buildPath, responseFromFetch };
