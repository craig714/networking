export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imUrl = data.imUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = data.creator
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.likes = data.likes
  }
}





const data = {



  "_id": "66ef2ac5cdb46480fea4b49b",
  "body": "Well this is great",
  "imgUrl": "https://media3.giphy.com/media/SFKM3J926x1ikBTFH4/200.webp?cid=790b7611rlh83tyw3xlnpmwdcmsuursqjzpeippi2lia04e3&ep=v1_gifs_search&rid=200.webp&ct=g",
  "creatorId": "66ec95d69c5afe6e880880b6",
  "likeIds": [],
  "createdAt": "2024-09-21T20:21:25.948Z",
  "updatedAt": "2024-09-21T20:21:25.948Z",
  "__v": 0,
  "creator": {
    "_id": "66ec95d69c5afe6e880880b6",
    "subs": [
      "auth0|66ec95d5e87e4f944e087a5b"
    ],
    "email": "bloggerson@bloggy.blog",
    "name": "bloggerson",
    "picture": "https://s.gravatar.com/avatar/c9c0abb63371c104b4c38b0d7b5f4444?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbl.png",
    "bio": "",
    "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    "github": "",
    "linkedin": "",
    "resume": "",
    "class": "",
    "graduated": false,
    "createdAt": "2024-09-19T21:21:32.587Z",
    "updatedAt": "2024-09-19T21:21:32.587Z",
    "__v": 0,
    "id": "66ec95d69c5afe6e880880b6"
  },
  "likes": [],
  "id": "66ef2ac5cdb46480fea4b49b"
}












