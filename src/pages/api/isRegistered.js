/*
GET /api/isRegistered returns true or false

200 returns bool true or false
*/
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

async function checkRegistration(email) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/Sheet1?key=${process.env.SHEETS_KEY}`;
    let data;
    console.log(process.env.SHEETS_KEY)
    const columnID = 0;
    try {
        const res = await fetch(url);
        data = await res.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
    for (let i = columnID; i < data.values.length; i++) {
        if (data.values[i][0] === email) {
            return true;
        }
    }
    return false;
}

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    

    if (session) {
        const registered = await checkRegistration(session.user.email);
        res.status(200).send({
            isRegistered: registered,
            email: session.user.email,
        });
    } else {
        res.status(401).send({
            error: "You must be signed in to access this route",
        });
    }
}
