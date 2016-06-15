import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectCategory(selection, component){
      if (selection) {
        this.set('category',selection);
        debugger;
      }
    },
    addItem() {
      var params= {
        category: this.get('category'),
        brand:" temporary",
        name: this.get('name'),
        price: this.get('price'),
        description: this.get('description'),
        imageItem: this.get('imageItem')
      };
      this.sendAction("addItem", params);
    }
  }
});
