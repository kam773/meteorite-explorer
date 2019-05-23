import {
    FETCH_METEORITES_BEGIN,
    FETCH_METEORITES_SUCCESS,
    FETCH_METEORITES_FAILURE
} from './types'

export const fetchMeteoritesRequest = () => ({
    type: FETCH_METEORITES_BEGIN
})

export const fetchMeteoritesSuccess = (meteorites) => ({
    type: FETCH_METEORITES_SUCCESS,
    payload: meteorites
})

export const fetchMeteoritesFailure = (error) => ({
    type: FETCH_METEORITES_FAILURE,
    payload: error
})

export const fetchMeteorites = (searchTerm) => (dispatch) => {
    dispatch(fetchMeteoritesRequest())
    let url;
    if (searchTerm) {
        url = `https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=50000&$offset=0&$where=lower(name)%20like%20lower(%22%25${searchTerm}%25%22)`;
    } else {
        url = `https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=50000&$offset=0`;
    }
    return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(data => dispatch(fetchMeteoritesSuccess(data)))
        .catch(error => dispatch(fetchMeteoritesFailure(error)))
}

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}