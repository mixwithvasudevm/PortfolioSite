import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("profile");
  }
  return req;
});

export const confirmUser = (result) => API.post(`/auth/google`,result);
export const fetchItem = (id) => API.get(`/blogs/${id}`);
export const fetchItems = (page) => API.get(`/blogs?page=${page}`);
export const fetchItemsBySearch = (searchQuery) =>
  API.get(
    `/items/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createItem = (newItem) => API.post("/blogs", newItem);
export const updateItem = (id, updatedItem) =>
  API.patch(`/items/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`/blogs/${id}`);
