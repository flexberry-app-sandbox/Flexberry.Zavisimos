import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокументНеУтMixin
} from '../mixins/regenerated/models/i-i-s-zavisimos-документ-не-ут';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокументНеУтMixin, Validations, {
});

defineProjections(Model);

export default Model;
