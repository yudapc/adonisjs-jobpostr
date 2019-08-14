'use strict';

const User = use('App/Models/User');

class UserController {
  async index({ request, response, auth }) {
    const users = await User.all();
    return response.json(users);
  }
  async show({ response, params }) {
    const user = await User.find(params.id);
    return response.json(user.toJSON());
  }
}

module.exports = UserController;
