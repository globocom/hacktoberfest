const path = require("path")
const jsonServer = require("json-server")
const bodyParser = require("body-parser")
const cors = require("cors");
const { ok } = require("assert");

const whitelist = [
  'http://localhost',
  'http://localhost:8000',
];

const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: 'accept, content-type'
};


const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, "db.json"))
const middlewares = jsonServer.defaults()

server.use(cors(corsOptions))
server.use(middlewares)
server.use(bodyParser.text())

server.get("/edition", (req, res) => {
  const db = router.db
  res.status(201).json(db.get("edition").value())
})

server.get("/user", (req, res) => {
  const db = router.db
  res.status(201).json(db.get("user").value())
})

server.get("/status", (req, res) => {
  const db = router.db
  const items = [];
  res.status(201).json(db.get('status').value())
})

server.get("/projects", (req, res) => {
  const db = router.db
  res.status(201).json(db.get("projects").value())
})

server.post("/update/user",(req, res, next) => {
  const data = JSON.parse(req.body || {})
  const db = router.db
  const user = db.get("user").cloneDeep().value()

  user.result = {
    ...user.result,
    ...data
  }
  db.get("user").assign(user).write()
  res.status(201).jsonp(db.get("user").value())
})

server.post("/subscribe", (req, res, next) => {
  const data = JSON.parse(req.body)
  const db = router.db
  const user = db.get("user").cloneDeep().value()

  user.result = {
    ...user.result,
    ...data,
  }

  db.get("user").assign(user).write()
  res.status(201).jsonp(db.get("user").value())
})

server.post("/subscribeEmail", (req, res, next) => {
  const data = JSON.parse(req.body)
  const db = router.db
  const user = db.get("user").cloneDeep().value()

  user.result = {
    ...user.result,
    ...data,
  }

  db.get("user").assign(user).write()
  res.status(201).jsonp(db.get("user").value())
})


server.use(router)
server.listen(3000, () => {
  console.log("Demo api server is running...")
})