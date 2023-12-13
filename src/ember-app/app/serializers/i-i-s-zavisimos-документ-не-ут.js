import { Serializer as ДокументНеУтSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zavisimos-документ-не-ут';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокументНеУтSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
