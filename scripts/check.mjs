import assert from 'node:assert/strict';
import { setTimeout } from 'node:timers/promises';

const baseUrl = (process.argv[2] || 'http://localhost:8080').replace(/\/$/, '');
const services = ['access', 'tasks-printing', 'submissions'];

async function request(path) {
  const response = await fetch(`${baseUrl}${path}`, { signal: AbortSignal.timeout(3000) });
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  return response;
}

async function check() {
  const page = await request('/');
  assert.match(await page.text(), /id="root"/);

  await Promise.all(services.map(async (service) => {
    const health = await request(`/api/${service}/health`);
    assert.equal((await health.text()).trim(), 'Healthy');
    const response = await request(`/api/${service}/api/service`);
    const info = await response.json();
    assert.equal(info.name, service);
    assert.equal(typeof info.displayName, 'string');
  }));

  for (const route of ['/access', '/tasks', '/submissions']) {
    const page = await request(route);
    assert.match(await page.text(), /id="root"/, `${route}: SPA routing failed`);
  }
}

const deadline = Date.now() + 60000;
while (true) {
  try {
    await check();
    console.log('OK: frontend, SPA routes and all three backend connections');
    break;
  } catch (error) {
    if (Date.now() >= deadline) {
      console.error(error.message);
      process.exitCode = 1;
      break;
    }
    await setTimeout(1000);
  }
}
