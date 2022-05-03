import customApiError from './custom-api.js'
import { StatusCodes } from 'http-status-codes'
class badRequestError extends customApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default badRequestError
