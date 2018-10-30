class Post {
    constructor (postId, title, author, content, date, featuredImg, comments) {
        this.postId = postId;
        this.title = title;
        this.author = author;
        this.content = content;
        this.date = date;
        this.featuredImg = featuredImg;
        this.comments = comments;
    }
}


//syntax for at sætte billeder ind: [img]https://i.imgur.com/sGYuIyO.gif[/img]
//italics: [i]Le italy[/i]
//og så videre
// {
//     postId:1,
//     title:"Velkommen til det nye år!",
//     author:"Klement Johansen",
//     content:"Lorem [i]ipsum[/i] blah blah",
//     date:"dd-MM-yyyy",
//     featuredImg:"",
//     comments:[
//         {
//             commentId:1,
//             userId:2,
//             author:"Jens-Ole",
//             profilePicture:"https://i.imgur.com/v6JHwtK.mp4",
//             content:"Yeah mand, det bliver super spift",
//             date:"dd-MM-YYYY"
//         },{
//             commentId:2,
//             userId:3,
//             author:"Anne",
//             profilePicture:"https://i.imgur.com/ZQ4RyHo.gif",
//             content:"Du er for cool Klement",
//             date:"dd-MM-YYYY"
//         }
//     ]
// }