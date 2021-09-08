const baseURL = 'https://accounts.spotify.com/authorize?';
const clientId = '221c24a4cc8f4d59b13a38940b77ce4e' ;
const redirectURI = 'http://localhost:3000/';

let expiresIn;
let accessToken;

const spotify = {
    getAccessToken() {
        
        if(accessToken) { 
            return accessToken;
        }
        
        const URL = window.location.href;
        const expMatch = URL.match(/expires_in=([^&]*)/);
        const tokMatch = URL.match(/access_token=([^&]*)/);
        
        if(tokMatch && expMatch) {
            accessToken = tokMatch;
            expiresIn = expMatch;
            
            window.setTimeout(() => accessToken = null, expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        }

        window.location.href = `${baseURL}&client_id=${clientId}&redirect_uri=${redirectURI}&response_type=token`;
    },

    search(term) {
        const baseSearchUrl = 'https://api.spotify.com/v1/search?type=TRACK';
        fetch(baseSearchUrl + `&q=${term}`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(response => {
            if(response.ok)
                return response.json;
        })
        .then(data => {
            const tracks = [];

            data.tracks.forEach(track => {
                const tObj = {
                    id: track.id,
                    name: track.name,
                    artists: [],
                    album: {
                        name: track.album.name
                    },
                    uri: track.uri
                };

                track.artists.forEach(artist => {
                    tObj.artists.push({name: artist.name});
                });
            });
            
            return tracks;
        });
    }
}

export default spotify;