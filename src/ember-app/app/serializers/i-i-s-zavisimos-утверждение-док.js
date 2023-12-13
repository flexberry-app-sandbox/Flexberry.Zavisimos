import { Serializer as УтверждениеДокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zavisimos-утверждение-док';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УтверждениеДокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
