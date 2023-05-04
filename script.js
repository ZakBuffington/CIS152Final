const videoIds = {
  
}

async function fetchPlaylist(playlist) {
  console.log(playlist)
  let playlist_id = trimYouTubePlaylistId(playlist)


}

function trimYouTubePlaylistId(raw_link){
  // sample https://www.youtube.com/watch?v=zOjov-2OZ0E&list=PLQv_DHsse4pQ7EXSc9mi976ZQSukdcRpI&pp=gAQB
  let string_link = String(raw_link)
  let start_index = string_link.indexOf("list=PL") + 7 // length of "list=PL"
  let output = string_link.slice(start_index)
  console.log(output)
  return output
}

class Video{
  // Add videoId and keep track of in linked list to limit api calls
  constructor(value){
    this.next = null
    this.value = value
  }
}

class VideoQueue{
  constructor(){
    this.first = null
    this.size = 0
    this.last = null
  }

  enqueue(value){
    const newVideo = new Video(value)
    if (!this.first){
      this.first = newVideo
      this.last = this.first
    } else {
      this.last.next = newVideo
      this.last = newVideo
    }
    this.size++
    return this
  }

  dequeue(){
    if (!this.first) return null
    var holding = this.first
    
    if (this.first === this.last){
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return holding.value
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