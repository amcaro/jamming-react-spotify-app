(this.webpackJsonpjamming=this.webpackJsonpjamming||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),r=n.n(s),i=(n(15),n(10)),o=n(9),u=n(3),l=(n(16),n(17),n(0));var h=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],s=n[1];return Object(l.jsxs)("div",{className:"SearchBar",children:[Object(l.jsx)("input",{placeholder:"Search a track",onChange:function(e){s(e.target.value)},value:a}),Object(l.jsx)("button",{className:"SearchButton",onClick:function(){!function(t){e.onSearch(t)}(a)},children:"SEARCH"})]})};n(19),n(20),n(21);var d=function(e){var t=function(){e.onAdd(e.track)},n=function(){e.onRemove(e.track)},c=e.track.artists.map((function(e){return"".concat(e.name,", ")})),a=c.length-1;return c[a]=c[a].replace(", ",""),Object(l.jsxs)("div",{className:"Track",children:[Object(l.jsxs)("div",{className:"Track-information",children:[Object(l.jsx)("h3",{children:e.track.name}),Object(l.jsxs)("p",{children:[c," | ",e.track.album.name," "]})]}),function(){var c=Object(l.jsx)("button",{className:"Track-action",onClick:t,children:"+"});return e.isRemoval&&(c=Object(l.jsx)("button",{className:"Track-action",onClick:n,children:"-"})),c}()]})},j=function(e){if(!e.tracks)return Object(l.jsx)("p",{children:"No results"});var t=e.tracks.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(d,{track:t,isRemoval:e.isRemoval,onAdd:e.onAdd,onRemove:e.onRemove})},t.id)}));return Object(l.jsx)("div",{className:"TrackList",children:Object(l.jsx)("ul",{children:t})})};var f=function(e){return Object(l.jsxs)("div",{className:"SearchResults",children:[Object(l.jsx)("h2",{children:"Results"}),Object(l.jsx)(j,{tracks:e.searchResults,onAdd:e.onAdd,isRemoval:!1})]})};n(22);var m,p,b=function(e){return Object(l.jsxs)("div",{className:"Playlist",children:[Object(l.jsx)("input",{type:"text",name:"playlist",defaultValue:"New Playlist",onChange:function(t){e.setName(t.target.value)}}),Object(l.jsx)(j,{tracks:e.tracks,onRemove:e.onRemove,isRemoval:!0}),Object(l.jsx)("button",{className:"Playlist-save",onClick:e.onSave,children:"SAVE TO SPOTIFY"})]})},v=n(5),O=n.n(v),x=n(7),k={getAccessToken:function(){if(p)return p;var e=window.location.href,t=e.match(/expires_in=([^&]*)/),n=e.match(/access_token=([^&]*)/);if(n&&t)return p=n[0].replace("access_token=",""),m=t[0].replace("expires_in=",""),window.setTimeout((function(){return p=null}),1e3*m),window.history.pushState("Access Token",null,"/"),p;window.location.href="".concat("https://accounts.spotify.com/authorize?","&client_id=").concat("221c24a4cc8f4d59b13a38940b77ce4e","&scope=playlist-modify-public&redirect_uri=").concat("https://amcaro.github.io/jamming-react-spotify-app/","&response_type=token")},search:function(e){return Object(x.a)(O.a.mark((function t(){var n,c,a,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e),c="https://api.spotify.com/v1/search?q=".concat(n,"&type=track"),a=[],t.next=5,fetch(c,{headers:{Authorization:"Bearer "+p}});case 5:return s=t.sent,t.next=8,s.json();case 8:return t.sent.tracks.items.forEach((function(e){var t={id:e.id,name:e.name,artists:[],album:{name:e.album.name},uri:e.uri};e.artists.forEach((function(e){t.artists.push({name:e.name})})),a.push(t)})),t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})))()},savePlaylist:function(e,t){return Object(x.a)(O.a.mark((function n(){var c,a,s,r,i,o,u,l;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t.length){n.next=2;break}return n.abrupt("return");case 2:return"https://api.spotify.com/v1/me",c={Authorization:"Bearer "+p},n.next=6,fetch("https://api.spotify.com/v1/me",{headers:c});case 6:if(!(s=n.sent).ok){n.next=14;break}return n.next=10,s.json();case 10:r=n.sent,a=r.id,n.next=16;break;case 14:return console.log("Error fetching userID"),n.abrupt("return");case 16:return i="https://api.spotify.com/v1/users/".concat(a,"/playlists"),n.next=19,fetch(i,{method:"POST",headers:c,body:JSON.stringify({name:e}),json:!0});case 19:if(!(s=n.sent).ok){n.next=27;break}return n.next=23,s.json();case 23:u=n.sent,o=u.id,n.next=29;break;case 27:return console.log("Error posting Playlist"),n.abrupt("return");case 29:return l="https://api.spotify.com/v1/playlists/".concat(o,"/tracks"),n.next=32,fetch(l,{method:"POST",headers:{Authorization:"Bearer "+p,"Content-Type":"application/json"},body:JSON.stringify({uris:t})});case 32:(s=n.sent).ok?(s.json(),console.log("Songs added to playlist")):console.log("Error adding songs to playlist");case 34:case"end":return n.stop()}}),n)})))()}};var y=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)("New Playlist"),d=Object(u.a)(r,2),j=d[0],m=d[1],p=Object(c.useState)([]),v=Object(u.a)(p,2),O=v[0],x=v[1];return Object(c.useEffect)((function(){k.getAccessToken()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Ja",Object(l.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{onSearch:function(e){k.search(e).then((function(e){s(e)})).catch((function(e){console.log(e)}))}}),Object(l.jsxs)("div",{className:"App-playlist",children:[Object(l.jsx)(f,{searchResults:a,onAdd:function(e){var t,n=!1,c=Object(o.a)(O);try{for(c.s();!(t=c.n()).done;){if(t.value.id===e.id){n=!0;break}}}catch(a){c.e(a)}finally{c.f()}n||x([].concat(Object(i.a)(O),[e]))}}),Object(l.jsx)(b,{name:j,tracks:O,onRemove:function(e){x(O.filter((function(t){return t.id!==e.id})))},setName:m,onSave:function(){var e=O.map((function(e){return e.uri}));k.savePlaylist(j,e),m("New Playlist"),x([])}})]})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),g()}],[[24,1,2]]]);
//# sourceMappingURL=main.7b077243.chunk.js.map