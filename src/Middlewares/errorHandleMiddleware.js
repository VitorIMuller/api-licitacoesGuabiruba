
const errorTable = {
  Bad_Request: 400,
  Unauthorized: 401,
  Unprocessable_Entity: 422,
  Not_Found: 404,
  Conflict: 409
}

export default function errorHandleMiddleware(err, req, res, next) {
  if (!err.message) {
    err.message === "An error as occured"
  }
  if (!errorTable[err.type]) {
    console.log(err)
    return res.sendStatus(500)
  }

  return res.status(errorTable[err.type]).send(err.message);

}