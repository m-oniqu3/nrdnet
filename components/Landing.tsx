import Button from "@/components/Button";
import Logo from "@/components/Logo";

function Landing() {
  return (
    <div className="">
      <section className="bg-navy py-8">
        <article className="wrapper flex flex-col gap-4 items-center text-center justify-center">
          <Logo className="text-4xl" />

          <p className="max-w-sm text-navy-muted">
            the internet, curated by nerds.<br></br> share links. add ur take.
            <br></br>
            start the argument.
          </p>

          <div className="flex flex-col gap-4">
            <Button>&laquo; JOIN FREE &raquo;</Button>
            <Button>BROWSE FEED</Button>
          </div>
        </article>
      </section>

      <section></section>
    </div>
  );
}

export default Landing;
