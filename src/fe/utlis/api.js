import get from "lodash/get";

const prefix =
  (process.env.NEXT_PUBLIC_ROOT_API_URL || "http://localhost:3000") +
  "/api/v1/";

const API = {
  login: "user/auth/login",
  verify: "user/auth/verify",
  houses: "/houses",
  housesVisit: "/houses/visit",
  member: "/member"
};

export const getApiUrl = urlName => prefix + get(API, urlName);
