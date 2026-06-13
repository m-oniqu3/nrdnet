import Button from "@/components/Button";

const buttons = ["top", "new", "following"];

function FeedFilterBar() {
  return (
    <div className="h-16 bg-surface-page border-b border-surface-chrome flex items-center ">
      <div className="wrapper flex items-center gap-2">
        {buttons.map((btn) => {
          return <Button key={btn}>{btn}</Button>;
        })}
      </div>
    </div>
  );
}

export default FeedFilterBar;
