class ExternalServiceException extends Error {
    
    constructor(message, cause) {
      super(message);
      this.name = 'ServiceException';
      this.cause = cause;
    }
  }
  
  module.exports = ExternalServiceException;