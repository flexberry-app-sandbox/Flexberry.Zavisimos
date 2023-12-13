import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСохранения: DS.attr('date', { defaultValue() { return new Date(); } }),
  тЧУтвержДок: DS.hasMany('i-i-s-zavisimos-т-ч-утверж-док', { inverse: 'документНеУт', async: false }),
  тЧСоздДок: DS.hasMany('i-i-s-zavisimos-т-ч-созд-док', { inverse: 'документНеУт', async: false })
});

export let ValidationRules = {
  датаСохранения: {
    descriptionKey: 'models.i-i-s-zavisimos-документ-не-ут.validations.датаСохранения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧУтвержДок: {
    descriptionKey: 'models.i-i-s-zavisimos-документ-не-ут.validations.тЧУтвержДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧСоздДок: {
    descriptionKey: 'models.i-i-s-zavisimos-документ-не-ут.validations.тЧСоздДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументНеУтE', 'i-i-s-zavisimos-документ-не-ут', {
    датаСохранения: attr('Дата сохранения', { index: 0 }),
    тЧУтвержДок: hasMany('i-i-s-zavisimos-т-ч-утверж-док', 'Т ч утверж док', {
      утверждениеДок: belongsTo('i-i-s-zavisimos-утверждение-док', 'Утверждение док', {
        дата: attr('Дата', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'дата' })
    }),
    тЧСоздДок: hasMany('i-i-s-zavisimos-т-ч-созд-док', 'Т ч созд док', {
      формаДокумента: belongsTo('i-i-s-zavisimos-форма-документа', 'Форма документа', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ДокументНеУтL', 'i-i-s-zavisimos-документ-не-ут', {
    датаСохранения: attr('Дата сохранения', { index: 0 })
  });
};
