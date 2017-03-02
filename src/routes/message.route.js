import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import messageCtrl from '../controllers/message.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/message - Get a random Message */
  .get(messageCtrl.get)

  /** POST /api/message - Save a new Message */
  .post(validate(paramValidation.sendMessage), messageCtrl.create)

export default router;
