import { Post } from "@/types/post";

type Props = {
  post: Post;
};

function PostCard(props: Props) {
  const {
    post: { custom_title },
  } = props;
  return <div>{custom_title}</div>;
}

export default PostCard;
