async function sendResponse(res, httpStatusCode, resData) {
    return res.status(httpStatusCode).json(resData);
}

module.exports = sendResponse;