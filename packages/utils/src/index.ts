import { value } from './ts-dependency';
import { prop } from './json-dependency.json';

export { log, prop, value };

function log(something: any) {
  console.log(something);
}
