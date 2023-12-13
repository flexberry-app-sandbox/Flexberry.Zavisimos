import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УтверждениеEnum from '../enums/i-i-s-zavisimos-утверждение';

export default FlexberryEnum.extend({
  enum: УтверждениеEnum,
  sourceType: 'IIS.Zavisimos.Утверждение'
});
