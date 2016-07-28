import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', {path:'/category/:category_id'});
  this.route('admin');
  this.route('clearance');
  this.route('shopping');
  this.route('contact');
});

export default Router;
