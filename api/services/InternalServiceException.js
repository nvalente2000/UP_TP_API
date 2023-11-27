class InternalServiceException extends Error {
    
    constructor(message) {
      super(message);
      this.name = 'ServiceException';
    }
  }
  
  module.exports = InternalServiceException;