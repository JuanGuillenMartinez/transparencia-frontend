import axios from "@/helpers/AxiosInstance";

export const getAll = async (url) => {
    const response = await axios.getInstance().get(url);
    const { data } = response;
    return data;
};

export const post = async (url, data) => {
    const response = await axios.getInstance().post(url, data);
    const { data: responseData } = response;
    return responseData;
};

export const get = async (url) => {
    const response = await axios.getInstance().get(url);
    const { data } = response;
    return data;
};

export const deleteRequest = async (url) => {
    const response = await axios.getInstance().delete(url);
    const { data: results } = response;
    return results;
};

export const update = async (url, data) => {
    if (data) {
        return await axios.getInstance().put(url, data);
    }
};

export const put = async (url, data) => {
    if (data) {
        const response = await axios.getInstance().put(url, data);
        const { data: results } = response;
        return results;
    }
};
