'use srict';

import MessageBusiness from '../business/message.business';
import ResponseFactory from '../factories/response.factory'

const _responseFactory = new ResponseFactory();
const _messageBusiness = new MessageBusiness();

/**
 * Get random message
 * @returns {Messages}
 */
function get(req, res, next) {
  _messageBusiness.getRandom()
    .then(messages => {
      res.json(_responseFactory.success(messages));
    })
    .catch(e => next(e));
}

/**
 * Create new message
 * @property {string} req.body.message - The message of message.
 * @property {string} req.body.author - The author of message.
 * @returns {Message}
 */
function create(req, res, next) {
  let messagevm = {
    message: req.body.message,
    author: req.body.author
  };

  _messageBusiness.create(messagevm)
    .then(savedMessage => {
      res.json(_responseFactory.success(savedMessage.toObject())) 
    })
    .catch(e => next(e));
}

export default { get, create };
