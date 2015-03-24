import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('school');
  },
  actions: {
    delete: function(school) {
      school.destroyRecord();
      return false;
    }
  }
});
