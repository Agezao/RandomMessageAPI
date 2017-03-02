'use strict';
import crypto from 'crypto';
import Promisse from 'bluebird';
import Message from '../models/message.model';

class MessageBusiness {

	constructor() { }

    getRandom() {
        return Message.count()
          .then(c => {
            let rand = Math.floor(Math.random() * c);

            return Message.findOne().skip(rand);
          });
    };

    create(vm) {
        return Message.create(vm);
    };
}

export default MessageBusiness;