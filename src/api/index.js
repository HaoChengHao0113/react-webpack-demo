import { request, upload } from "./request";
export const getList = () => request('/apc/api/v1/lists/','GET')
export const getMusicList = (query) => request('/musicapc/api/rand.music',"GET",query)
export const uploadFile = (file) => upload('v2/5cc8019d300000980a055e76',file);