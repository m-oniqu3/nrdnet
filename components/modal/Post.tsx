import Button from "@/components/Button";
import { useModalContext } from "@/context/ModalContext";

function Post() {
  const { closeModal, stopPropagation } = useModalContext();

  return (
    <form
      className="w-full h-fit bg-surface-card absolute bottom-0 pb-32"
      onClick={stopPropagation}
    >
      <header className="bg-navy h-14 flex items-center ">
        <div className="wrapper flex items-center justify-between">
          <p className="text-brand-yellow font-semibold">drop_link.exe</p>

          <Button onClick={closeModal}>x</Button>
        </div>
      </header>

      <div className="wrapper flex flex-col gap-4 py-4 h-full">
        <div className="item">
          <label htmlFor="url" className="">
            url:
          </label>
          <input type="text" name="url" placeholder="http://..." className="" />
        </div>

        <div className="item">
          <label htmlFor="url" className="">
            headline: <span>(opt)</span>
          </label>
          <input
            type="text"
            name="url"
            placeholder="we'll scrape it"
            className=""
          />
        </div>

        <div className="item">
          <label htmlFor="url" className="">
            ur take:
          </label>
          <textarea rows={4} placeholder="why should ppl read this"></textarea>
        </div>

        <div className="item">
          <label htmlFor="tags" className="">
            tags:
          </label>
          <input
            type="text"
            name="tags"
            placeholder="tech,food,science"
            className=""
          />
          <p className="text-xs text-surface-chrome">space or comma to add</p>
        </div>

        <Button type="submit" className="w-full">
          &raquo; submit &raquo;
        </Button>
      </div>
    </form>
  );
}

export default Post;
