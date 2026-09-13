import { test, expect } from '@playwright/test';
import { createPostData, updatePostData } from '../data/apiData';

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
      data: createPostData,
    }
  );

  expect(response.status()).toBe(201);
  const responseBody = await response.json();

  expect(responseBody.title).toBe(createPostData.title);
  expect(responseBody.body).toBe(createPostData.body);
  expect(responseBody.userId).toBe(createPostData.userId);
  expect(responseBody.id).toBeTruthy();
});

test('GET request returns 404 for a non-existing post', async ({ request }) => {
  const response = await request.get('/posts/999999');

  expect(response.status()).toBe(404);
});

test('PUT request updates an existing post', async ({ request }) => {
  const response = await request.put('/posts/1',
    {
      data: updatePostData,
    }
  );

  expect(response.status()).toBe(200);
  const responseBody = await response.json();

  expect(responseBody.id).toBe(updatePostData.id);
  expect(responseBody.title).toBe(updatePostData.title);
  expect(responseBody.body).toBe(updatePostData.body);
  expect(responseBody.userId).toBe(updatePostData.userId);
});

test('DELETE request removes a post', async ({ request }) => {
  const response = await request.delete(
    '/posts/1'
  );

  expect(response.status()).toBe(200);
});