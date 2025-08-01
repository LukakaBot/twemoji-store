import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useMemo } from 'react';

export interface AppIconProps extends React.HTMLAttributes<HTMLElement> {
	name: string;
  size?: number;
	color?: string;
}

function AppIcon(props: AppIconProps) {
  const {className, name, size = 16, color} = props;

  const width = useMemo(() => )

	const isLocalIcon = useMemo(
		() => props.name.startsWith('svg-'),
		[props.name]
	);

	const isCssIcon = useMemo(() => props.name.startsWith('icon-'), [props.name]);

	return (
    isLocalIcon ? <Image src={`/svg/${name}.svg`} width={} />
  );
}

export default AppIcon;
