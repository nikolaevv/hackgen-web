import { useState } from 'react';

const urlBase = 'https://hackgen1.herokuapp.com'
const apiBase = `${urlBase}/api/app`;
const headersBase = {'Content-Type': 'application/json'};

const getResource = async (url, params, field, successCallback = () => {}, headers = headersBase) => {
    let path_url = new URL(`${apiBase}${url}`)
    if (params) {
        path_url.search = params;
    }

    const res = await fetch(path_url, {headers: headers});

    if (!res.ok) {
        throw new Error("Could not fetch");
    }

    const body = await res.json();
    await successCallback(body[field]);
    return body;
};

const postResource = async (url, data, field, successCallback = () => {}, headers = headersBase) => {
    let path_url = new URL(`${apiBase}${url}`)
    const res = await fetch(path_url, {
        headers: headers, 
        method: 'POST', 
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        throw new Error("Could not fetch");
    }

    const body = await res.json();
    await successCallback(body[field]);
    return body;
};

const useCreateApp = () => {
    const [appId, setAppId] = useState(null);
    const createApp = (data) => postResource('/', data, 'id', setAppId);
    return [appId, createApp];
};

const useAppCreatingStatus = () => {
    const [appStatus, setAppStatus] = useState(null);
    const getStatus = (id) => getResource(`/${id}/status`, null, 'status', setAppStatus);
    return [appStatus, getStatus];
};

export {urlBase, useCreateApp, useAppCreatingStatus};