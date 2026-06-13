import { IconProps } from "@/utils/icons";
import { JSX } from "react";

type Props = {
  icon: ({ className }: IconProps) => JSX.Element;
  name: string;
};

function NavItem(props: Props) {
  const { icon, name } = props;

  const Icon = icon;
  return (
    <div className="flex flex-col gap-1 items-center justify-center text-navy-muted">
      <Icon className="size-5" />
      <p className="text-xs font-semibold uppercase">{name}</p>
    </div>
  );
}

export default NavItem;
