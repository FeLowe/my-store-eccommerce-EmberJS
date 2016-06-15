import Ember from 'ember';

export default Ember.Component.extend({
  var categoryList: [],
  categoryItems: Ember.computed('category.title', 'item.category', function() {
    if('category.title' === 'item.category'){
      categoryList.push(model.item);
    }
    return categoryList;
  }),
});
