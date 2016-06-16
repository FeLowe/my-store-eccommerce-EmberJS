import Ember from 'ember';

export default Ember.Component.extend({
  shopping: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shopping').add(item);
   }
 }
  // var categoryList: [],
  // categoryItems: Ember.computed('items.[]', 'categories.[]', function() {
  //   if(this.get('category.id') == this.get('item.category')){
  //     categoryList.push(item);
  //   };
  //   return categoryList;
  // }),


// isSameCategory: Ember.computed.equal('category.id', 'item.category', function() {
//   return this.get('category.id') == this.get('item.category');
//   })
  // }),
});
