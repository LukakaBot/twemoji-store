import { Icon } from "@iconify/react";
import Image from "next/image";
import { useMemo } from "react";

export interface AppIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  size?: number;
  color?: string;
}

export default function AppIcon(props: AppIconProps) {
  const { className, name, size = 16, color } = props;

  const isLocalIcon = useMemo(
    () => props.name.startsWith("svg-"),
    [props.name]
  );

  const isCssIcon = useMemo(() => props.name.startsWith("icon-"), [props.name]);

  const iconStyle = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return isLocalIcon ? (
    <Image
      className={className}
      src={`/svg/${name}.svg`}
      width={size}
      height={size}
      alt={name}
    />
  ) : isCssIcon ? (
    <span className={`${name} ${className ?? ""}`} style={iconStyle} />
  ) : (
    <Icon
      className={className}
      icon={name}
      width={size}
      height={size}
      color={color ?? undefined}
    />
  );
}
