import { value } from './ts-dependency';
import { prop } from './json-dependency.json';

type Value = boolean;

const alias = value;

/**
 * Comment will be removed on build
 */
console.log(<Value>alias);
console.log(prop);
