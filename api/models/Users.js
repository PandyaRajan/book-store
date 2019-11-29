/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userId: {
      type: 'string',
      required:true
    },
    name: {
      type: 'string',
      required:true
    },
    email: {
      type: 'string',
      required:true,
      email: true,
      unique: true
    },
    profileImageURL: {
      type: 'string',
      required:true
    },
    loginProvider: {
      type: 'string',
      required:true
    }

  },

};

