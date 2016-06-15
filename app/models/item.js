import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  brand:DS.attr(),
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  imageItem: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
