import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import DOM from "react-dom/server";
import App from "../ui/app";

const PORT = 3004;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({
    limit: "2mb"
}));
app.use(express.static("public"));
app.get("^/$", (req, res) => {
    try {
        const html = fs.readFileSync(path.resolve("./index.html"), "utf-8");
        return res.send(html.replace(
            `<div id="root"></div>`,
            `<div id="root">${DOM.renderToString(React.createElement(App, {
                loading: true
            }))}</div> `
        ));
    } catch (e) {
        console.log("Error:", e)
        return res.status(500).send(e);
    }
})
app.listen(PORT, () => console.log(`Portal is now online using PORT.`));
