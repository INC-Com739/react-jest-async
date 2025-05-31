const { fetchData } = require('./fetchUtils');

global.fetch = jest.fn();

describe('fetchData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data successfully from an API', async () => {
    const mockResponse = { id: 1, title: 'Test Todo' };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });
    const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toHaveProperty('id', 1);
    expect(data).toHaveProperty('title', 'Test Todo');
  });

  it('returns an error object for a bad URL', async () => {
    fetch.mockResolvedValueOnce({ ok: false, status: 404 });
    const data = await fetchData('https://jsonplaceholder.typicode.com/404');
    expect(data).toHaveProperty('error');
    expect(typeof data.error).toBe('string');
  });
});
