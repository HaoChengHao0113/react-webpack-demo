import { request } from "./request";
export const getList = () => request('/apc/api/v1/lists/','GET')
export const getMusicList = (query) => request('/musicapc/api/rand.music',"GET",query)