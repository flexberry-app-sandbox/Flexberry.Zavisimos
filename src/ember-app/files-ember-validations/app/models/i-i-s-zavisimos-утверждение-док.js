import {
  defineNamespace,
  defineProjections,
  Model as УтверждениеДокMixin
} from '../mixins/regenerated/models/i-i-s-zavisimos-утверждение-док';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УтверждениеДокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
