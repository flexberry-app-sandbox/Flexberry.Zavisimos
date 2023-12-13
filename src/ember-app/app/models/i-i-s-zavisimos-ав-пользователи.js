import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АвПользователиMixin
} from '../mixins/regenerated/models/i-i-s-zavisimos-ав-пользователи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АвПользователиMixin, Validations, {
});

defineProjections(Model);

export default Model;
