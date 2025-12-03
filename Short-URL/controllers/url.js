const { nanoid } = require("nanoid");

const UrlModel = require("../models/url");


async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    const originalUrl = body.originalUrl || body.url || body.URL;
    if (!originalUrl) return res.status(400).json({ error: "url is required" });

    try {
        const shortID = nanoid(8);
        await UrlModel.create({
            shortId: shortID,
            redirectURL: originalUrl,
            visitHistory: [],
            createdBy:req.user._id,
        });
        const allurl = await UrlModel.find({});
     return res.render("home", { id: shortID, urls: allurl });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "internal server error" });
    }
}
async function handleGetAnalytics (req, res) {
    const shortId = req.params.shortId;
    const result = await UrlModel.findOne({ shortId });
    if (!result) {
        return res.status(404).json({ error: "shortId not found" });
    }
    return res.json({ totalclicks: result.visitHistory.length, analytics: result.visitHistory });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
}
