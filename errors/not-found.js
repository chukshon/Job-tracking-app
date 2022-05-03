import customApiError from './custom-api.js'
import { StatusCodes } from 'http-status-codes'
class notFoundError extends customApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

export default notFoundError
