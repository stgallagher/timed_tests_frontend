import DS from 'ember-data';

export default DS.Model.extend({
  topFactor: DS.attr(),
  bottomFactor: DS.attr(),
  operator: DS.attr('string'),
  answer: DS.attr(),
  quizzes: DS.hasMany('quiz', { async: true })
});
