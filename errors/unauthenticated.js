const CustomAPiError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class unauthenticatedError extends CustomAPiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = unauthenticatedError;
