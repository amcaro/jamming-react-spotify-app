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
            accessToken = tokMatch[0].replace("access_token=", "");
            expiresIn = expMatch[0].replace("expires_in=", "");

            window.setTimeout(() => accessToken = null, expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        }

        window.location.href = `${baseURL}&client_id=${clientId}&redirect_uri=${redirectURI}&response_type=token`;
    },

    async search(term) {
        const urlTerm = encodeURI(term);
        const searchUrl = `https://api.spotify.com/v1/search?q=${urlTerm}&type=track`;
        const tracks = [];

        const response = await fetch(searchUrl, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        const data = await response.json();

        data.tracks.items.forEach(track => {
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

            tracks.push(tObj);   
        })

        return tracks;
    }
}

export default spotify;