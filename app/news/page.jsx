import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <li>
          <Link href="/news/1">First News Item</Link>
        </li>
        <li>
          <Link href="/news/2">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/3">Third News Item</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
