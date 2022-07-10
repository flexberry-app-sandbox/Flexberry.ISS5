import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string')
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-i-s-s5-пользователь.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПользовательE', 'i-i-s-i-s-s5-пользователь', {
    фИО: attr('ФИО', { index: 0 })
  });

  modelClass.defineProjection('ПользовательL', 'i-i-s-i-s-s5-пользователь', {
    фИО: attr('ФИО', { index: 0 })
  });
};
