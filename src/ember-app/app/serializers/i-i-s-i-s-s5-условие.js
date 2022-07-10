import { Serializer as УсловиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-s-s5-условие';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УсловиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
