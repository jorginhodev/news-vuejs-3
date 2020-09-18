/*
 * Mirage JS guide on Routes: https://miragejs.com/docs/route-handlers/functions
 */

import { Response } from 'miragejs';

export default function routes() {
  this.namespace = 'api';

  this.timing = 1500;

  /*
   * A resource comprises all operations for a CRUD
   * operation. .get(), .post(), .put() and delete().
   * Mirage JS guide on Resource: https://miragejs.com/docs/route-handlers/shorthands#resource-helper
   */
  this.resource('users');

  this.get('users/fail', () => new Response(500, {}, 'O servidor caiu!'));

  this.resource('products');

  /*
   * From your component use fetch('api/messages?userId=<a user id>')
   * replacing <a user id> with a real ID
   */
  this.get('messages', (schema, request) => {
    const {
      queryParams: { userId },
    } = request;

    return schema.messages.where({ userId });
  });
}
