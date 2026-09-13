import { test, expect } from '@playwright/test';

test('GET request returns 200 and correct response body', async ({ request }) => {
  const response = await request.get('/posts/1');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBeTruthy();
});

test('POST request creates a new post', async ({ request }) => {
  const response = await request.post('/posts',
    {
      data: {
        title: 'Playwright API test',
        body: 'Learning API testing with Playwright',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);
  const responseBody = await response.json();

  expect(responseBody.title).toBe('Playwright API test');
  expect(responseBody.body).toBe('Learning API testing with Playwright');
  expect(responseBody.userId).toBe(1);
  expect(responseBody.id).toBeTruthy();
});

test('GET request returns 404 for a non-existing post', async ({ request }) => {
  const response = await request.get('/posts/999999');

  expect(response.status()).toBe(404);
});

test('PUT request updates an existing post', async ({ request }) => {
  const response = await request.put('/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated Playwright post',
        body: 'This post has been updated',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(200);
  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBe('Updated Playwright post');
  expect(responseBody.body).toBe('This post has been updated');
  expect(responseBody.userId).toBe(1);
});

test('DELETE request removes a post', async ({ request }) => {
  const response = await request.delete(
    '/posts/1'
  );

  expect(response.status()).toBe(200);
});