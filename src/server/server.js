import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import { App } from "../App.tsx";
import axios from "axios";

const PORT = process.env.PORT || 3000;
const ID = process.env.CLIENT_ID;
const PASSWORD = process.env.SECRET;

const app = express();

app.use("/static", express.static("./dist/client"));

// app.get("/auth", (req, res) => {
//   res.send(indexTemplate(ReactDOM.renderToString(App())));
// });

app.get("/auth", (req, res) => {

  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://learn-react-rostislavbel.up.railway.app/auth`,
    {
      auth: { username: ID, password: PASSWORD},
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
  )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data['access_token']),
      );

    })
    .catch(console.log())

});

app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});


app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
