type Props = {
  className?: string;
};
function Logo(props: Props) {
  const { className = "" } = props;

  return (
    <h1
      className={`${className} font-family-mono text-brand-yellow font-semibold`}
    >
      nrd.
      <span className="text-brand-orange">net</span>
    </h1>
  );
}

export default Logo;
