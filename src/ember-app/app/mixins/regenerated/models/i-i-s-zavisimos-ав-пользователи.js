import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРегистрации: DS.attr('date'),
  логин: DS.attr('string'),
  пароль: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-zavisimos-сотрудники', { inverse: null, async: false }),
  тЧПрава: DS.hasMany('i-i-s-zavisimos-т-ч-права', { inverse: 'авПользователи', async: false })
});

export let ValidationRules = {
  датаРегистрации: {
    descriptionKey: 'models.i-i-s-zavisimos-ав-пользователи.validations.датаРегистрации.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  логин: {
    descriptionKey: 'models.i-i-s-zavisimos-ав-пользователи.validations.логин.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пароль: {
    descriptionKey: 'models.i-i-s-zavisimos-ав-пользователи.validations.пароль.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-zavisimos-ав-пользователи.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПрава: {
    descriptionKey: 'models.i-i-s-zavisimos-ав-пользователи.validations.тЧПрава.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АвПользователиE', 'i-i-s-zavisimos-ав-пользователи', {
    датаРегистрации: attr('Дата регистрации', { index: 0 }),
    логин: attr('Логин', { index: 1 }),
    пароль: attr('Пароль', { index: 2 }),
    сотрудники: belongsTo('i-i-s-zavisimos-сотрудники', 'Сотрудники', {
      фИОСотрудника: attr('Ф и о сотрудника', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИОСотрудника' }),
    тЧПрава: hasMany('i-i-s-zavisimos-т-ч-права', 'Т ч права', {
      праваПол: attr('Права пол', { index: 0 })
    })
  });

  modelClass.defineProjection('АвПользователиL', 'i-i-s-zavisimos-ав-пользователи', {
    датаРегистрации: attr('Дата регистрации', { index: 0 }),
    логин: attr('Логин', { index: 1 }),
    пароль: attr('Пароль', { index: 2 }),
    сотрудники: belongsTo('i-i-s-zavisimos-сотрудники', 'Ф и о сотрудника', {
      фИОСотрудника: attr('Ф и о сотрудника', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
