import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  наименование: DS.attr('string'),
  отделы: DS.attr('i-i-s-zavisimos-отделы'),
  содержание: DS.attr('string'),
  авПользователи: DS.belongsTo('i-i-s-zavisimos-ав-пользователи', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-zavisimos-форма-документа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-zavisimos-форма-документа.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-zavisimos-форма-документа.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-zavisimos-форма-документа.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  авПользователи: {
    descriptionKey: 'models.i-i-s-zavisimos-форма-документа.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаДокументаE', 'i-i-s-zavisimos-форма-документа', {
    наименование: attr('Наименование', { index: 0 }),
    содержание: attr('Содержание', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    отделы: attr('Отделы', { index: 3 }),
    авПользователи: belongsTo('i-i-s-zavisimos-ав-пользователи', 'Ав пользователи', {
      логин: attr('Логин', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'логин' })
  });

  modelClass.defineProjection('ФормаДокументаL', 'i-i-s-zavisimos-форма-документа', {
    наименование: attr('Наименование', { index: 0 }),
    содержание: attr('Содержание', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    отделы: attr('Отделы', { index: 3 }),
    авПользователи: belongsTo('i-i-s-zavisimos-ав-пользователи', 'Логин', {
      логин: attr('Логин', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
