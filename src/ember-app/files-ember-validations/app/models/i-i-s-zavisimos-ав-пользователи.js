import {
  defineNamespace,
  defineProjections,
  Model as АвПользователиMixin
} from '../mixins/regenerated/models/i-i-s-zavisimos-ав-пользователи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АвПользователиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
