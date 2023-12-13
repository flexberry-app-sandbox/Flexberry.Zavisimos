import { Serializer as ТЧУтвержДокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zavisimos-т-ч-утверж-док';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧУтвержДокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
