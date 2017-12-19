import axios from 'axios';

export const FETCH_FEEDS = "fetch_feeds";
export const DELETE_FEEDS = "delete_feeds";
export const CREATE_FEEDS = "create_feeds";

// export const tokenType = localStorage.getItem('token_type');
// export const accessToken = localStorage.getItem('access_token');
// export const token = tokenType.concat(" ", accessToken);

export function fetchFeeds() {
    const request = axios.get('building/' + 51 + '/feeds/3', null, {
        headers: {
            'Authorization': token
        }
    });

    return {
        type: FETCH_FEEDS,
        payload: request
    }
}

export function createFeed(newFeed, id) {
    const url = `building/${id}/feed`;
    const request = axios.post(url, {
        content: newFeed
    }, {headers: {'Authorization': token}});

    return {
        type: CREATE_FEEDS,
        payload: request
    }
}

export function deleteFeed(id) {
    const url = 'building/' + 51 + '/feeds/' + id;
    const request = axios.delete(url, null, {headers: {'Authorization': token}});

    return {
        type: DELETE_FEEDS,
        payload: request
    }
}