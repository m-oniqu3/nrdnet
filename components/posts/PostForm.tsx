"use client";

import Button from "@/components/Button";
import { useModalContext } from "@/context/ModalContext";
import createPost from "@/utils/api/posts/createPost";
import { useState } from "react";

type ScrapedData = {
  title: string | null;
  image: string | null;
  domain: string | null;
};

function PostForm() {
  const { closeModal, stopPropagation } = useModalContext();

  const [url, setUrl] = useState("");
  const [customTitle, setCustomTitle] = useState("");
  const [take, setTake] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const [scraped, setScraped] = useState<ScrapedData | null>(null);
  const [scraping, setScraping] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // scrape the url on blur
  async function handleUrlBlur() {
    if (!url) return;

    setScraping(true);

    try {
      // call your scrape endpoint — a simple Next.js route handler
      const res = await fetch(`/api/scrape?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      setScraped(data);
      // pre-fill headline with scraped title if user hasn't typed one yet
      if (!customTitle && data.title) setCustomTitle(data.title);
    } catch {
      // scrape failed silently — user can still fill in manually
    } finally {
      setScraping(false);
    }
  }

  // submit post
  async function handleSubmit() {
    setError(null);
    setPending(true);

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    const result = await createPost({
      url,
      custom_title: customTitle,
      take,
      tags,
      og_title: scraped?.title ?? null,
      og_image: scraped?.image ?? null,
      og_domain: scraped?.domain ?? null,
    });

    if (result?.error) {
      setError(result.error);
      setPending(false);
      return;
    }

    // reset form on success
    setUrl("");
    setCustomTitle("");
    setTake("");
    setTagsInput("");
    setScraped(null);
    setPending(false);

    closeModal();
  }

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
        {error && (
          <div className="text-red-400  text-xs font-mono">{error}</div>
        )}

        <div className="item">
          <label htmlFor="url" className="">
            url:
          </label>
          <input
            type="text"
            id="url"
            placeholder="http://..."
            disabled={scraping}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onBlur={handleUrlBlur}
            className=""
          />
        </div>

        <div className="item">
          <label htmlFor="headline" className="">
            headline: <span>(opt)</span>
          </label>
          <input
            type="text"
            name="headline"
            placeholder="we'll scrape it"
            disabled={scraping}
            value={customTitle}
            onChange={(e) => setCustomTitle(e.target.value)}
            className=""
          />
          {scraping && (
            <span className="text-xs text-ink-muted font-mono">
              scraping...
            </span>
          )}
        </div>

        <div className="item">
          <label htmlFor="take" className="">
            ur take:
          </label>
          <textarea
            id="take"
            rows={4}
            value={take}
            onChange={(e) => setTake(e.target.value)}
            placeholder="why should ppl read this"
          ></textarea>
        </div>

        <div className="item">
          <label htmlFor="tags" className="">
            tags:
          </label>
          <input
            type="text"
            id="tags"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="tech,food,science"
            className=""
          />
          <p className="text-xs text-surface-chrome">
            comma to add (comma separated)
          </p>
        </div>

        <Button
          type="submit"
          className="w-full"
          onClick={handleSubmit}
          disabled={scraping || pending || !url}
        >
          {/* &raquo; submit &raquo; */}
          {pending ? "posting..." : ">> post it <<"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
