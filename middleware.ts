export default function middleware(request: Request) {
  const url = new URL(request.url);
  const host = url.hostname;

  if (host === 'megalancer.online') {
    url.hostname = 'www.megalancer.online';
    return Response.redirect(url.toString(), 301);
  }

  return undefined;
}
