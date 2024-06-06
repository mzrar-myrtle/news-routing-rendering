import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </Link>
          <span>{newsItem.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
