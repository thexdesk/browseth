import {Handler, Request, Response as TransportResponse} from './types';

export function isSupported(): boolean {
  return (
    typeof Response !== 'undefined' &&
    Response.prototype.hasOwnProperty('body') &&
    typeof Headers === 'function'
  );
}

export function handle(
  request: Request,
  cb: (err: Error | void, response?: TransportResponse) => void,
) {
  fetchRequest(request)
    .then(resp => cb(undefined, resp))
    .catch(cb);
}

async function fetchRequest(request: Request): Promise<TransportResponse> {
  const promises = [
    fetch(request.url, {
      body: request.msg,
      headers:
        request.headers &&
        new Headers(
          Object.keys(request.headers).map(v => {
            const value = request.headers![v];
            return typeof value === 'string'
              ? [v, value]
              : [v, value.join(', ')];
          }),
        ),
      method: 'POST',
    }).then(async resp => {
      if (resp.ok !== true) {
        throw new Error(`Not ok resp.status<${resp.status}> & '${await resp.text()}'`);
      }
      return {
        headers: {},
        msg: await resp.text(),
        status: resp.status,
      };
    }),
  ];

  if (request.timeout) {
    promises.push(new Promise((_, r) => setTimeout(r, request.timeout)));
  }

  return Promise.race(promises);
}
