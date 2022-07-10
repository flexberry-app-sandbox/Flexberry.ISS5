import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерУсловия: DS.attr('string'),
  наименование: DS.attr('string'),
  пользователь: DS.belongsTo('i-i-s-i-s-s5-пользователь', { inverse: null, async: false }),
  условие: DS.belongsTo('i-i-s-i-s-s5-условие', { inverse: 'видПоддержки', async: false })
});

export let ValidationRules = {
  номерУсловия: {
    descriptionKey: 'models.i-i-s-i-s-s5-вид-поддержки.validations.номерУсловия.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s5-вид-поддержки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-i-s-s5-вид-поддержки.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  условие: {
    descriptionKey: 'models.i-i-s-i-s-s5-вид-поддержки.validations.условие.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидПоддержкиE', 'i-i-s-i-s-s5-вид-поддержки', {
    номерУсловия: attr('Номер условия', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    пользователь: belongsTo('i-i-s-i-s-s5-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });
};
