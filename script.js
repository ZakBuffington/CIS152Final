const videoCategories = {
  1: "Film & Animation",
  2: "Autos & Vehicles",
  10: "Music",
  15: "Pets & Animals",
  17: "Sports",
  18: "Short Movies",
  19: "Travel & Events",
  20: "Gaming",
  21: "Videoblogging",
  22: "People & Blogs",
  23: "Comedy",
  24: "Entertainment",
  25: "News & Politics",
  26: "Howto & Style",
  27: "Education",
  28: "Science & Technology",
  29: "Nonprofits & Activism",
  30: "Movies",
  31: "Anime/Animation",
  32: "Action/Adventure",
  33: "Classics",
  34: "Comedy",
  35: "Documentary",
  36: "Drama",
  37: "Family",
  38: "Foreign",
  39: "Horror",
  40: "Sci-Fi/Fantasy",
  41: "Thriller",
  42: "Shorts",
  43: "Shows",
  44: "Trailers"
}

const videoIdWithCategory = {
  "GvgqDSnpRQM": 1,
  "fIc_VEQ7Vo0": 42,
  "V4DDt30Aat4": 1,
  "07718Vcwcyc": 1, 
  "XDgC4FMftpg": 1,
  "OE63BYWdqC4": 20,
  "RQbmXxU2dkg": 20,
  "7nJdEXpvi1g": 20,
  "7hakGJU9xco": 29,
  "x9-F6dbCIHw": 28,
  "gK7lUK0711E": 28,
  "18TknKGC7tY": 1,
  "CyRQJBBVI7g": 38
}

//GvgqDSnpRQM, fIc_VEQ7Vo0, V4DDt30Aat4, 07718Vcwcyc, XDgC4FMftpg, OE63BYWdqC4, RQbmXxU2dkg, 7nJdEXpvi1g, 7hakGJU9xco, x9-F6dbCIHw, gK7lUK0711E, 18TknKGC7tY, CyRQJBBVI7g

async function fetchPlaylist(playlist) {
  let my_playlist = new VideoQueue()
  console.log(playlist)
  let playlist_id = trimYouTubePlaylistId(playlist)
  // fetch playlist using API with playlist_id
  for (var i = 0; i < sampleApiReturn.items.length; i++){
    var item = sampleApiReturn.items[i]
    console.log(item.contentDetails.videoId)
    my_playlist.enqueue(item.contentDetails.videoId)
  }


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

const json = JSON.stringify({
  "kind": "youtube#playlistItemListResponse",
  "etag": "BBkC3VqNZPnEyS9-CsFyJYb7JKE",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "KRtQ-uhZ61kWRAHVFYhADM5HhyM",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLkE2OTA3QzIwNEI3RjYxMDE",
      "snippet": {
        "publishedAt": "2013-10-18T14:55:24Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Andrew Willis, Skatepark Engineer",
        "description": "Andrew Willis built a skatepark in East London using reclaimed materials left over from the Olympic Games, creating a lasting legacy for the local community of Hackney Wick.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GvgqDSnpRQM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GvgqDSnpRQM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GvgqDSnpRQM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/GvgqDSnpRQM/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "GvgqDSnpRQM"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "GvgqDSnpRQM",
        "videoPublishedAt": "2013-10-18T07:03:29Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "PDryPsnDnoujgzjvLmQFAnsNTN4",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLjU5NzE2QkNERURDRTE5NDc",
      "snippet": {
        "publishedAt": "2011-09-23T04:52:44Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Private video",
        "description": "This video is private.",
        "thumbnails": {},
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "fIc_VEQ7Vo0"
        }
      },
      "contentDetails": {
        "videoId": "fIc_VEQ7Vo0"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "zREZG8vRy2pZwL2qAoP2uyxsYKU",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLkZGQjNGMEFDQ0U0MzBCMzc",
      "snippet": {
        "publishedAt": "2011-11-22T15:29:40Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Mark Lesek: A New/Old Prosthetic",
        "description": "Follow Mark on Google+: https://plus.google.com/u/0/114778778979884307299/about\r\n\r\nMark lost his arm several years ago. Now his search for a better prosthetic could improve the lives of amputees everywhere.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/V4DDt30Aat4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/V4DDt30Aat4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/V4DDt30Aat4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/V4DDt30Aat4/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "V4DDt30Aat4"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "V4DDt30Aat4",
        "videoPublishedAt": "2011-11-21T19:11:41Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "a5GhJiGOsVvKJAfe73l_i3Q0MzU",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLkFBRDU2ODRCNTgwMzA2RTQ",
      "snippet": {
        "publishedAt": "2011-10-20T01:02:11Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Private video",
        "description": "This video is private.",
        "thumbnails": {},
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "07718Vcwcyc"
        }
      },
      "contentDetails": {
        "videoId": "07718Vcwcyc"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "6sXUDk-QJqyrMP3sZVVhGRbE8Yo",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLkMyQjUzQkM1OTFFRTNFMEQ",
      "snippet": {
        "publishedAt": "2011-11-22T15:29:40Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Mark Kempton: Neighbors In Need",
        "description": "Follow Mark on Google+: https://profiles.google.com/u/0/105705606437451864842\r\n\r\nWhen floodwaters hit northeast Australia, Mark's innovative search became the difference between life and death for many of his neighbors.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XDgC4FMftpg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XDgC4FMftpg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XDgC4FMftpg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/XDgC4FMftpg/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "XDgC4FMftpg"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "XDgC4FMftpg",
        "videoPublishedAt": "2011-11-21T20:36:57Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "H2PV9cIadY2qhY2OFYz93hWo2MA",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLjk1MkNDOEREQTkwRjc5OEY",
      "snippet": {
        "publishedAt": "2011-09-23T04:52:44Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Zack Matere: Growing Knowledge",
        "description": "Add Zack on Google+ https://plus.google.com/108801896271358175231/about\n\nWatch all the Google Search Stories and submit your own at http://www.youtube.com/searchstories\n\n\nZack Matere, a farmer in Soy, Kenya, searched for a way to save his dying crops. What he discovered was a desire to help local farmers and businesses access information.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/OE63BYWdqC4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/OE63BYWdqC4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/OE63BYWdqC4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 5,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "OE63BYWdqC4"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "OE63BYWdqC4",
        "videoPublishedAt": "2011-09-19T21:03:44Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "I74sIjZOrCQ2kqeHUaodhMxh3pk",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLjY2ODExOUY5RTYxNTdCNDM",
      "snippet": {
        "publishedAt": "2011-11-22T15:29:40Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Mitch Dobrowner: Epic Storms",
        "description": "Follow Mitch on Google+: https://plus.google.com/113020499347875878373/posts\r\n\r\nMitch, a fine art photographer, is constantly searching for incredible storms. And when he finds them, he captures moments that will never exist again.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RQbmXxU2dkg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RQbmXxU2dkg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RQbmXxU2dkg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/RQbmXxU2dkg/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 6,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "RQbmXxU2dkg"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "RQbmXxU2dkg",
        "videoPublishedAt": "2011-11-21T21:50:12Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "t-fH--twkUbOKMr0hMvK_aTF9Iw",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLkNERTk4QURCQjgzNzFEOEQ",
      "snippet": {
        "publishedAt": "2011-09-23T04:52:44Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "The Tofino Riders: A 1,000 Year-Old-Wave",
        "description": "A group of surfing buddies search to find breaks that have never been ridden before.\r\n\r\nFollow Jeremy on Google+ https://plus.google.com/108784596859472465602/about\r\n\r\nWatch all the Google Search Stories and submit your own at http://www.youtube.com/searchstories",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/7nJdEXpvi1g/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/7nJdEXpvi1g/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/7nJdEXpvi1g/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/7nJdEXpvi1g/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 7,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "7nJdEXpvi1g"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "7nJdEXpvi1g",
        "videoPublishedAt": "2011-09-16T21:46:54Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "RWWkPdN_9z-03iNDNi7TtbagcyI",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLjRFQzA0ODQ3NkU2RjU2QkY",
      "snippet": {
        "publishedAt": "2011-11-22T15:29:40Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "David Kennedy: Ancient Ruins",
        "description": "Follow David on Google+: https://plus.google.com/u/0/114898495286326966719/about\r\n\r\nDavid is an aerial archaeologist whose studies have taken him to areas where he isn't allowed to fly. He searches the desert mile by mile, all from an office half a world away.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/7hakGJU9xco/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/7hakGJU9xco/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/7hakGJU9xco/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/7hakGJU9xco/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 8,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "7hakGJU9xco"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "7hakGJU9xco",
        "videoPublishedAt": "2011-11-21T20:06:41Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "xSyG6uQj05Y8W3boiZhf9DxhE48",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLjA0OTc2REM3MkM0MEU3RUI",
      "snippet": {
        "publishedAt": "2011-09-23T04:52:44Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Caroline: Supernova 2008ha",
        "description": "Caroline, an amateur astronomer, became the youngest person to discover a supernova. Now she's the star of Warwick, New York.\n\nFollow Bob on Google+\nhttps://plus.google.com/116254810301845410582/about\n\nWatch all the Google Search Stories and submit your own at http://www.youtube.com/searchstories",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/x9-F6dbCIHw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/x9-F6dbCIHw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/x9-F6dbCIHw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 9,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "x9-F6dbCIHw"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "x9-F6dbCIHw",
        "videoPublishedAt": "2011-09-17T00:57:20Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "Qxot8KobUZWx8VDSLPxsfU_gPwk",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLkE5NTMyMEJDNjI0RDVBNjk",
      "snippet": {
        "publishedAt": "2011-09-23T04:52:44Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Private video",
        "description": "This video is private.",
        "thumbnails": {},
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 10,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "gK7lUK0711E"
        }
      },
      "contentDetails": {
        "videoId": "gK7lUK0711E"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "w6J63ezdCB4fzAGqg4g6-kepuNI",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLjZGMUU3ODUzRTQ4QkM0Njk",
      "snippet": {
        "publishedAt": "2011-09-23T04:52:44Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Erik-Jan Bos: A Letter from an Old Friend",
        "description": "Erik-Jan, a philosophy scholar in the Netherlands, has spent 20 years studying René Descartes. In 2010, his search to understand Descartes' correspondences led him to something that had been missing for over 300 years.\n\nWatch all the Google Search Stories and submit your own at http://www.youtube.com/searchstories",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/18TknKGC7tY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/18TknKGC7tY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/18TknKGC7tY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/18TknKGC7tY/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 11,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "18TknKGC7tY"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "18TknKGC7tY",
        "videoPublishedAt": "2011-09-16T22:37:16Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "mY5094xpONv78sW38bpYxOjbcOU",
      "id": "UExCQ0YyREFDNkZGQjU3NERFLjEzM0Q3RTUxOTM3MzE4MTM",
      "snippet": {
        "publishedAt": "2012-03-07T22:52:44Z",
        "channelId": "UCvceBgMIpKb4zK1ss-Sh90w",
        "title": "Cheryl and Morgan: Learning Independence",
        "description": "The tools that Cheryl Oakes uses in the classroom help students like Morgan make technology work for them.\r\n\r\nSee more stories: http://www.google.com/searchstories",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CyRQJBBVI7g/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CyRQJBBVI7g/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CyRQJBBVI7g/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/CyRQJBBVI7g/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Google Search Stories",
        "playlistId": "PLBCF2DAC6FFB574DE",
        "position": 12,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "CyRQJBBVI7g"
        },
        "videoOwnerChannelTitle": "Google Search Stories",
        "videoOwnerChannelId": "UCvceBgMIpKb4zK1ss-Sh90w"
      },
      "contentDetails": {
        "videoId": "CyRQJBBVI7g",
        "videoPublishedAt": "2012-03-29T15:59:34Z"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 13,
    "resultsPerPage": 25
  }
})

const sampleApiReturn = JSON.parse(json)

/*
// Code is directly from YouTube Data API sample
  function authenticate() {
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
    return gapi.client.youtube.playlistItems.list({
      "part": [
        "snippet,contentDetails"
      ],
      "maxResults": 25,
      "playlistId": "PLBCF2DAC6FFB574DE"
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
//<button onclick="authenticate().then(loadClient)">authorize and load</button>
//<button onclick="execute()">execute</button>
*/