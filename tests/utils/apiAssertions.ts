import { expect } from '@playwright/test';
import Ajv from 'ajv';
import { postSchema } from '../data/postSchema';

const ajv = new Ajv();
const validatePost = ajv.compile(postSchema);

export function expectValidPost(responseBody: unknown) {
  const isValid = validatePost(responseBody);

  expect(
    isValid,
    JSON.stringify(validatePost.errors, null, 2)
  ).toBe(true);
}