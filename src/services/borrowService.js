import http from "./httpService";

export function borrowBook(userId, bookId) {
  return http.post(`/borrows`, { userId, bookId });
}

export function findBorrowsByUserId(userId) {
  return http.get("/borrows/" + userId);
}
