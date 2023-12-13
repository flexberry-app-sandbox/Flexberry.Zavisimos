import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  формаДокумента: DS.belongsTo('i-i-s-zavisimos-форма-документа', { inverse: null, async: false }),
  документНеУт: DS.belongsTo('i-i-s-zavisimos-документ-не-ут', { inverse: 'тЧСоздДок', async: false })
});

export let ValidationRules = {
  формаДокумента: {
    descriptionKey: 'models.i-i-s-zavisimos-т-ч-созд-док.validations.формаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  документНеУт: {
    descriptionKey: 'models.i-i-s-zavisimos-т-ч-созд-док.validations.документНеУт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоздДокE', 'i-i-s-zavisimos-т-ч-созд-док', {
    формаДокумента: belongsTo('i-i-s-zavisimos-форма-документа', 'Форма документа', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
