import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

const NewsPage = () => {
  return <NewsList news={DUMMY_NEWS} />;
};

export default NewsPage;
