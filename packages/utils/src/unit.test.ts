import { value } from './ts-dependency';

test('should be true', () => {
  type Bool = boolean;

  expect(<Bool>value).toEqual(true);
});
