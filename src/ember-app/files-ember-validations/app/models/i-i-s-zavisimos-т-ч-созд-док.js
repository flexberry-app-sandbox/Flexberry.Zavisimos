import {
  defineNamespace,
  defineProjections,
  Model as ТЧСоздДокMixin
} from '../mixins/regenerated/models/i-i-s-zavisimos-т-ч-созд-док';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСоздДокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
