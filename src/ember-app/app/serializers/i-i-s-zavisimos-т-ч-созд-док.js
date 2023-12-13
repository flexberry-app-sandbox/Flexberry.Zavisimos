import { Serializer as ТЧСоздДокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zavisimos-т-ч-созд-док';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСоздДокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
