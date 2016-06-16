import Ember from 'ember';

export default Ember.Component.extend({

  lastItemToSHow: Ember.computed('items.[]', function(){
    return this.get('name') + ' with brand ' + this.get('brand');
  }),

  addItemFormSubmit: false,
  actions: {
    selectCategory(selection){
      if (selection) {
        this.set('category',selection);

      }
    },
    addItem() {
      var params= {
          category: this.get('category'),
          brand:this.get('brand'),
          name: this.get('name'),
          price: this.get('price'),
          description: this.get('description'),
          imageItem: this.get('imageItem')
      };
      this.set("addItemFormSubmit", true);
      this.sendAction("addItem", params);
    }
  }
});
