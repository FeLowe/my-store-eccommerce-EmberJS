import Ember from 'ember';

export default Ember.Component.extend({
  firstObject: 0,
  lastObject: 6,
  limitedItems: Ember.computed('items.[]','firstObject', function(){
    var limitAllItems= this.get('items').slice(this.get('firstObject'),this.get('lastObject'));
    return limitAllItems;
    //   var nameOfLimitedItems= "";
    // limitAllItems.forEach(function(item){
    //   nameOfLimitedItems += item.get('name');
    //   // return nameOfLimitedItems;
    // })
    // return nameOfLimitedItems;
  }),
  actions: {
    previous() {
      this.set('firstObject', this.get('firstObject')-6);
      this.set('lastObject', this.get('lastObject')-6);
    },
    next() {
      this.set('firstObject', this.get('firstObject')+6);
      this.set('lastObject', this.get('lastObject')+6);
    }
  }

});
