import MockAdapter from "axios-mock-adapter";

function parseQueryString(url) {
  const queryString = url.replace(/.*\?/, "");

  const result = {};
  if (queryString === url || !queryString) {
    return result;
  }

  const urlParams = new URLSearchParams(queryString);
  urlParams.forEach((val, key) => {
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      result[key] = [result[key], val];
    } else {
      result[key] = val;
    }
  });

  return result;
}

export default {
  mocked(axiosClient) {
    const mock = new MockAdapter(axiosClient, { onNoMatch: "passthrough" });
    mock.onGet("/api/version").reply(200, {version: "0.2.0"});

    mock.onGet(/\/api\/hello2?.*/).reply((config) => {
      const params = parseQueryString(config.url);
      return [200, { config, params }];
    });

    mock.onPost("/api/formPost").reply((config) => {
      //const formData = config.data;
      const name = config.data.get("name");
      return [200, { config, name: name }];
    });

    mock.onPost("/api/postJson").reply((config) => {
      const data = JSON.parse(config.data);
      return [200, { data }];
    });

    mock.onGet("/api/delayHello").reply((config) => {
      const delay = 5000;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, { hello: "world" }]);
        }, delay);
      });
    });
  }
};
