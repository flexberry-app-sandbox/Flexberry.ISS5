import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s5-пользователь-l');
  this.route('i-i-s-i-s-s5-пользователь-e',
  { path: 'i-i-s-i-s-s5-пользователь-e/:id' });
  this.route('i-i-s-i-s-s5-пользователь-e.new',
  { path: 'i-i-s-i-s-s5-пользователь-e/new' });
  this.route('i-i-s-i-s-s5-условие-l');
  this.route('i-i-s-i-s-s5-условие-e',
  { path: 'i-i-s-i-s-s5-условие-e/:id' });
  this.route('i-i-s-i-s-s5-условие-e.new',
  { path: 'i-i-s-i-s-s5-условие-e/new' });
});

export default Router;
