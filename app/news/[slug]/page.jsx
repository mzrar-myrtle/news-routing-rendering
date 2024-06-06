import { DUMMY_NEWS } from "@/dummy-news";

const NewsDetailPage = ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </header>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailPage;
