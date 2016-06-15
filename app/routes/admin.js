import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      items: this.store.findAll('item')
    });
  },
  actions: {
    addItem(params){
      console.log(params);
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      // this.transitionTo('admin');
    }
  }
});
