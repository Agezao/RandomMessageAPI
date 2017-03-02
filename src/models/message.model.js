import Promise from 'bluebird';
import mongoose from 'mongoose';

/**
 * Message Schema
 */
const MessageSchema = new mongoose.Schema({
  message: { type: 'String', required: true, unique: true },
  author:  { type: 'String', required: true },
  created: { type: Date, default: Date.now }
},
{ toObject: {
    transform: function (doc, ret, game) { delete ret.__v; }
  }
});


/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
MessageSchema.method({ });

/**
 * Statics
 */
MessageSchema.statics = { 
  get(params) {
    if(typeof(params) === 'object')
      return this.find(params)
        .exec();
        
    return this.findById(params)
      .exec();
  },

  create(vm) {
    let model = new this(vm);

    return model.save();
  }
  
};

/**
 * @typedef Message
 */
export default mongoose.model('Message', MessageSchema);
