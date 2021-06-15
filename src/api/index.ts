import service from "@utils/request";

export const getUser = () => { service.get("/api/user") }