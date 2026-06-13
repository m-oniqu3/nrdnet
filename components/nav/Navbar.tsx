import AuthNav from "@/components/nav/AuthNav";
import DefaultNav from "@/components/nav/DefaultNav";
import { JwtPayload } from "@supabase/supabase-js";

type Props = {
  user: JwtPayload | undefined;
};

function Navbar(props: Props) {
  const { user } = props;
  if (!user) return <DefaultNav />;

  return <AuthNav />;
}

export default Navbar;
