import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

const InterceptedImagePage = async ({ params }) => {

  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug)

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
