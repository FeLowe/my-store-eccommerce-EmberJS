import Ember from 'ember';

export default Ember.Component.extend({
  shopping: Ember.inject.service(),
    clearanceItems: Ember.computed('items.[]', function() {
      var listOfClearance= [];
      this.get('items').forEach(function(item) {
        if (item.get('price') < 50){
          listOfClearance.push(item);
        }
      });
      return listOfClearance;
    }),
    actions: {
      addToCart(item) {
        this.get('shopping').add(item);
     }
   }
});
