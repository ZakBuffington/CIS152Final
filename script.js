async function fetchPlaylist(playlist) {
    console.log(playlist)
}

class Video{
  constructor(value){
    this.next = null
    this.value = value
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
    this.tail = null
  }

  push(value){
    const newVideo = new Video(value)
    if (!this.head){
      this.head = newVideo
      this.tail = this.head
    } else {
      this.tail.next = newVideo
      this.tail = newVideo
    }
    this.size++
    return this
  }
}

/*function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
}

function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    return gapi.client.youtube.videos.list({
      "part": [
        "snippet,contentDetails,statistics"
      ],
      "id": [
        "Ks-_Mh1QhMc,c0KYU2j0TM4,eIho2S0ZahI"
      ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
});
*/