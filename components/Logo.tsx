type Props = {
  className?: string;
  alt?: boolean;
};

function Logo(props: Props) {
  const { className = "", alt = false } = props;

  return (
    <h1
      className={`${className} font-family-mono ${alt ? "text-navy" : "text-brand-yellow"} font-bold`}
    >
      nrd.
      <span className="text-brand-orange">net</span>
    </h1>
  );
}

export default Logo;
