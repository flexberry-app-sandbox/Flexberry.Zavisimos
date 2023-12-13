import { Serializer as ВходВСистемуSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zavisimos-вход-в-систему';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВходВСистемуSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
