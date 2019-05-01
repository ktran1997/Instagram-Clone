let express = require("express");
let graphqlHTTP = require("express-graphql");
let {buildSchema} = require("graphql");
let cors = require("cors");
let Pusher = require("pusher");
let bodyParser = require("body-parser");
let Multipart = require("connect-multiparty");

let schema = buildSchema(`
	type User {
		id : String!
		nickname : String!
		avatar : String!
	}
	type Post {
		id: String!
		user: User!
		caption: String!
		image: String!
	}
	type Query {
		user(id: String) : User!
		post(user_id: String, post_id: String) : Post!
		posts(user_id: String) : [Post]
	}
`);

let userslist = {
	a: {
		id: "a", 
		nickname: "Izuku",
		avatar: "https://imgix.ranker.com/user_node_img/50088/1001743173/original/a-letter-to-a-hero-photo-u3?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
	},
	b: {
		id: "b", 
		nickname: "Naruto",
		avatar: "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest?cb=20170621101134"
	}
};

let postslist = {
	a: {
		a: {
			id: "a",
			user: userslist["a"],
			caption: "Your Name",
			image: "https://wallpaperaccess.com/full/201420.jpg"
		},
		b: {
			id: "b",
			user: userslist["b"],
			caption: "Fairy Tail",
			image: "https://media.moddb.com/images/groups/1/9/8185/Fairy_Tail_hd_wallpapers_1.jpg"
		},
		c: {
			id: "c",
			user: userslist["a"],
			caption: "Your Lie In April",
			image: "https://i.pinimg.com/originals/09/6d/f0/096df0eb195b8f0d9475924f9a1e9425.jpg"
		},
		d: {
			id: "d",
			user: userslist["b"],
			caption: "Me and My Best Friend",
			image: "https://i.ytimg.com/vi/v1-5xBYU8WQ/maxresdefault.jpg"
		}
	}
};

let root = {
	user: function({id}) {
		return userslist[id];
	},
	post: function({user_id, post_id}) {
		return postslist[user_id][post_id];
	},
	posts:function({user_id}) {
		return Object.values(postslist[user_id]);
	}
};

let pusher = new Pusher({
	appId: 'APP_ID',
	key: 'KEY',
	secret: 'SECRET',
	cluster: 'CLUSTER',
	encrypted: true
});



let multipartMiddleware = new Multipart();

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

app.post('/newpost', multipartMiddleware, (req,res) => {
	let post = {
		user: {
			nickname : req.body.name,
			avatar : req.body.avatar
		},
		image : req.body.image,
		caption : req.body.caption
	}
	pusher.trigger("posts-channel", "new-post", {
		post
	});
	return res.json({status : "Post created"});
});

app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
