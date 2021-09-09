const baseURL = 'https://accounts.spotify.com/authorize?';
const clientId = '221c24a4cc8f4d59b13a38940b77ce4e';
const redirectURI = 'https://amcaro.github.io/jamming-react-spotify-app/';

let expiresIn;
export let accessToken;

const spotify = {
    async getAccessToken() {
        
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
            window.history.pushState('Access Token', null, '/jamming-react-spotify-app/');

            return accessToken;
        }

        window.location.href = `${baseURL}&client_id=${clientId}&scope=playlist-modify-public&redirect_uri=${redirectURI}&response_type=token`;
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
    },

    async savePlaylist(listName, trackURIs) {

        if ( !listName || !trackURIs.length ) {
            return;
        }
        
        //Get user ID
        const userURL = 'https://api.spotify.com/v1/me'
        const header = { 'Authorization': 'Bearer ' + accessToken };
        let userID;

        let response = await fetch(userURL, {headers: header});

        if(response.ok) {
            const data = await response.json();
            userID = data.id;
        }
        else {
            console.log('Error fetching userID');
            return;
        }

        // Create new Playlist in user account
        const playlistURL = `https://api.spotify.com/v1/users/${userID}/playlists`;
        let playlistID;

        response = await fetch(playlistURL, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({name: listName}),
            json: true
        });

        if(response.ok) {
           const data = await response.json();
           playlistID = data.id;
        }
        else {
            console.log('Error posting Playlist');
            return;
        }

        //Add song tracks to created playlist
        const addtracksURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;


        response = await fetch(addtracksURL, {
            method: 'POST',
            headers: { 
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({uris: trackURIs })
        });

        if(response.ok) {
            const data = response.json();
            new Notification(`'${listName}' has been saved to Spotify!`)
            console.log('Songs added to playlist')
        }
        else {
            console.log('Error adding songs to playlist');
        }
    }
}

export default spotify;