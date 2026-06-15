function EmptyFeed() {
  return (
    <div className="flex flex-col items-center gap-4 py-10 px-6 text-center">
      <pre className="font-mono text-xs text-ink-muted leading-relaxed">
        {`+--------------------+\n| no posts yet       |\n|    (╥_╥)           |\n+--------------------+`}
      </pre>
      <p className="font-vt text-xl text-navy">THE FEED IS EMPTY</p>
      <p className="font-mono text-xs text-ink-secondary">
        be the first nerd to drop a link.
      </p>
      <button className="font-vt text-sm bg-brand-yellow text-navy border-2 border-brand-yellow-dark px-6 py-2 tracking-widest">
        &gt;&gt; DROP FIRST LINK &lt;&lt;
      </button>
    </div>
  );
}
export default EmptyFeed;
