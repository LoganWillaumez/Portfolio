const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
  const links = [
    { url: '/home', changefreq: 'yearly', priority: 0.25 },
    { url: '/about', changefreq: 'yearly', priority: 0.25 },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.25 },
    { url: '/contact', changefreq: 'yearly', priority: 0.25 },
  ];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());
  res.end(xmlString);
};
