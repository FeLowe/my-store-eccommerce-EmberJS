import Ember from 'ember';

export default Ember.Service.extend({

  items: [],

  add(item) {
    this.get('items').pushObject(item);
    console.log(this.get('items'));
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
});
