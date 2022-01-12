import axios from "axios";

const BASE_URL = "https://error-api.herokuapp.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTcxYzhlYzJiMzUyYjI3MWQ3OWVjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTYzMzU5MiwiZXhwIjoxNjM5ODkyNzkyfQ.PUuHo5OKOoCEbK5XBktbfUrGqFJ5qGYKQQ8lO42D29U"
export const publicRequest = axios.create({
    baseURL : BASE_URL,
});
export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}` }
});

