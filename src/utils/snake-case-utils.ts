import { mapKeys, snakeCase } from 'lodash';
const mapSnakeCase = (object: Object) => mapKeys(object, (_value: string, keys: string) => snakeCase(keys));
export default mapSnakeCase;
