import http from "./httpService";

export function findUsers() {
  return http.get("/users");
}


