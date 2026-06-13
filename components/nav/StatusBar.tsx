type Props = {
  username: string;
};

function StatusBar(props: Props) {
  const { username } = props;
  return (
    <section className="h-6 bg-surface-page border-t border-surface-chrome fixed bottom-16 left-0 w-full flex items-center z-50">
      <div className="wrapper flex items-center justify-between ">
        <p className="text-xs">feed empty</p>

        <p className="text-xs">welcome, {username}</p>
      </div>
    </section>
  );
}

export default StatusBar;
