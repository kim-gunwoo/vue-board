const DB = require("../config/LowDB");
const shortid = require("shortid");

const create = async (req, res) => {
    //const userId = req.user.id;
    const boardSid = shortid.generate();
    const title = req.body.title;

    let bid = DB.get("boards").findLastIndex().value();
    if (bid === -1) {
        bid = 1;
    } else {
        bid += 2;
    }

    await DB.get("boards")
        .push({
            bid: bid,
            bsid: boardSid,
            title: title,
            //description: description,
            //user_id: req.user.id,
        })
        .write();

    res.status(201).end();
};

const findAll = async (req, res) => {
    const boards = await DB.get("boards").value();
    res.json({ boards });
};

const find = async (req, res) => {
    const boardId = req.params.bsid;
    const board = await DB.get("boards").find({ bsid: boardId }).value();

    if (!board) return res.status(404).end();

    res.json({ board });
};

const update = async (req, res) => {
    const check = checkParams(req);

    if (check) {
        return res.status(400).end(check);
    }

    const body = req.body;
    console.log(req.body);

    try {
        await DB.get("boards")
            .find({ bsid: body.bsid })
            .assign({
                title: body.title,
                description: body.description,
            })
            .write();
    } catch (err) {
        console.log(err);
        return res.status(400).end(err);
    }
    return res.status(204).end();
};

function checkParams(req) {
    const body = req.body;

    if (body === null || body === undefined) {
        return "Current Data";
    }
    if (body.bsid === null || body.bsid === undefined) {
        return "Current Data bsid";
    }
    let boardId = req.params.bsid;
    if (boardId === null || boardId === undefined) {
        return "current params";
    }
    return null;
}

const destroy = async (req, res) => {
    const body = req.params;

    try {
        await DB.get("boards").remove({ bsid: body.bsid }).write();
    } catch (err) {
        return res.status(400).end(err);
    }
    res.status(204).end();
};

module.exports = {
    create,
    findAll,
    find,
    update,
    destroy,
};
