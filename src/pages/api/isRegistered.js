/*
GET /api/isRegistered returns true or false

200 returns bool true or false
*/
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);

    // Yohance add in whatever you need here to get the value from sheets
    const checkRegistration = true;

    if (session) {
        res.status(200).send({
            isRegistered: checkRegistration,
            email: session.user.email,
        });
    } else {
        res.status(401).send({
            error: "You must be signed in to access this route",
        });
    }
}
