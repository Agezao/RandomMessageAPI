import Joi from 'joi';

export default {

  // POST /api/message
  sendMessage: {
    body: {
      message: Joi.string().required(),
      author: Joi.string().required()
    }
  }
};
