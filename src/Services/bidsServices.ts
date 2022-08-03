import Parser from "rss-parser";

export async function getBids() {
  type CustomItem = {
    id: number,
    title: string,
    link: string,
    updated: string,
    pubDate: string,
    content: string
  };

  const parser: Parser<CustomItem> = new Parser({
    customFields: {
      item: ['id', 'title', 'link', 'updated', 'pubDate', 'content']
    }
  });

  const feed = await parser.parseURL('https://www.guabiruba.sc.gov.br/feed/assinar/licitacoes/tipo/feed');

  return feed.items;
} 