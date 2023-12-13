import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧПраваMixin
} from '../mixins/regenerated/models/i-i-s-zavisimos-т-ч-права';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧПраваMixin, Validations, {
});

defineProjections(Model);

export default Model;
