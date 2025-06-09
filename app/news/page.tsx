'use client';

import { useEffect, useState } from 'react';
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import NewsCard from '@components/Card/NewsCard';

type NewsItem = {
  when: string;
  name: string;
  image: string;
  url: string;
};

const Page: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=ibai+OR+auronplay+OR+elxokas+OR+rubius+OR+streamer+OR+streamers+OR+influencer+OR+influencers&language=es&pageSize=30&apiKey=1e979a74205241638e523910bf661862'
        );
        const data = await response.json();

        const formattedNews = data.articles
          .filter((a: any) => a.publishedAt && a.title && a.url)
          .sort(
            (a: any, b: any) =>
              new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
          )
          .slice(0, 10)
          .map((article: any) => ({
            when: new Date(article.publishedAt).toLocaleString('es-ES', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }),
            name: article.title,
            image: article.urlToImage || 'https://via.placeholder.com/400x200?text=Sin+imagen',
            url: article.url,
          }));

        setNews(formattedNews);
      } catch {
        // console.error('Error fetching news');
      }
    };

    fetchNews();
  }, []);

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='padding-bottom center'>
            <Heading type={1} color='gray' text='Noticias' />
            <p className='gray'>
              Actualizaciones importantes y novedades del equipo de StreamEvents.
            </p>
          </div>
        </div>
      </Section>

      <Section className='list-cards'>
        <div
          className='container'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)', // ← 5 columnas fijas
            gap: '2rem', // ← separación horizontal y vertical
            padding: '2rem',
          }}
        >
          {news.length > 0 ? (
            news.map((item, index) => (
              <NewsCard
                key={index}
                url={item.url}
                color='red'
                when={item.when}
                name={item.name}
                image={item.image}
              />
            ))
          ) : (
            <p>Cargando noticias...</p>
          )}
        </div>
      </Section>
    </Master>
  );
};

export default Page;
