import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерУсловия: DS.attr('string'),
  наименование: DS.attr('string'),
  видПоддержки: DS.hasMany('i-i-s-i-s-s5-вид-поддержки', { inverse: 'условие', async: false })
});

export let ValidationRules = {
  номерУсловия: {
    descriptionKey: 'models.i-i-s-i-s-s5-условие.validations.номерУсловия.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s5-условие.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  видПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s5-условие.validations.видПоддержки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УсловиеE', 'i-i-s-i-s-s5-условие', {
    номерУсловия: attr('Номер условия', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    видПоддержки: hasMany('i-i-s-i-s-s5-вид-поддержки', 'Вид поддержки', {
      номерУсловия: attr('Номер условия', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      пользователь: belongsTo('i-i-s-i-s-s5-пользователь', 'Пользователь', {
        фИО: attr('ФИО', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('УсловиеL', 'i-i-s-i-s-s5-условие', {
    номерУсловия: attr('Номер условия', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
