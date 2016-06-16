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
      params.category.get('items').addObject(newItem);
      newItem.save().then(function() {
        return params.category.save();
      });
      // this.transitionTo('admin');
    }
  }
});
