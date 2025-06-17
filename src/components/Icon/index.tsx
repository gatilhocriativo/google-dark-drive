import { SvgIcon, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type IconProps = {
  name: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  size?: 'large' | 'medium' | 'small';
  color?: string;
};

export function Icon({
  name,
  size = 'small',
  color = 'on-surface',
}: IconProps) {
  return (
    <SvgIcon component={name} fontSize={size} className={`text-${color}`} />
  );
}
