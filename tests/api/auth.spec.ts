import { test, expect } from '@playwright/test';

test('authenticated request returns 200', async ({ request }) => {
  const credentials = Buffer.from('user:passwd').toString('base64');

  const response = await request.get(
    'https://httpbin.org/basic-auth/user/passwd',
    {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    }
  );

  expect(response.status()).toBe(200);
});

/* user:passwd
   ↓
Base64-kodas
   ↓
Authorization: Basic <encoded value> */

test('request with invalid credentials returns 401', async ({ request }) => {
  const credentials = Buffer.from('user:wrongpassword').toString('base64');

  const response = await request.get(
    'https://httpbin.org/basic-auth/user/passwd',
    {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    }
  );

  expect(response.status()).toBe(401);
});