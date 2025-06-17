'use client';

import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { Icon } from '../Icon';
import {
  CloudOutlined,
  DeleteOutline,
  DevicesOutlined,
  HomeOutlined,
  PeopleOutline,
  ReportOutlined,
  ScheduleOutlined,
  StarOutline,
  StorageOutlined,
} from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { usePathname } from 'next/navigation';
import { ButtonNewAction } from '../ButtonNewAction';

type MenuItem = {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  slug: string;
  divide?: boolean;
};

const MENU: MenuItem[] = [
  {
    name: 'Pessoal',
    icon: HomeOutlined,
    slug: '/',
  },
  {
    name: 'Meu Drive',
    icon: StorageOutlined,
    slug: '/my-drive',
  },
  {
    name: 'Computadores',
    icon: DevicesOutlined,
    slug: '/devices',
    divide: true,
  },
  {
    name: 'Compartilhados Comigo',
    icon: PeopleOutline,
    slug: '/shared',
  },
  {
    name: 'Recentes',
    icon: ScheduleOutlined,
    slug: '/schedule',
  },
  {
    name: 'Com estrelha',
    icon: StarOutline,
    slug: '/stared',
    divide: true,
  },
  {
    name: 'Spam',
    icon: ReportOutlined,
    slug: '/spam',
  },
  {
    name: 'Lixeira',
    icon: DeleteOutline,
    slug: '/trash',
  },
  {
    name: 'Armazenamento',
    icon: CloudOutlined,
    slug: '/storage',
  },
];

export function Menu() {
  return (
    <div className="flex flex-col gap-6 items-start w-full">
      <Image src={Logo} alt="Logo" />
      <ButtonNewAction />
      <div className="w-full">
        <ul>
          {MENU.map((item) => (
            <MenuItem key={item.slug} item={item} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3 w-full ml-2">
        <span className="w-[210px] h-1 bg-surface-1 rounded-full relative after:absolute after:w-[114px] after:h-1 after:rounded-full after:bg-primary after:top-0 after:left-0" />
        <p>9,52 GB de 15 GB usados</p>
      </div>
      <div>
        <button className="px-12 py-2 rounded-full border border-on-surface hover:bg-surface-1 text-primary">
          Compre mais Armazenamento
        </button>
      </div>
    </div>
  );
}

type MenuItemProps = {
  item: MenuItem;
};

function MenuItem({ item }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.slug;

  return (
    <a href={item.slug}>
      <li
        key={item.slug}
        className={`${
          !isActive && 'hover:bg-surface-1'
        } rounded-full flex items-center gap-3 px-2 py-1 ${
          item.divide && 'mb-6'
        } ${
          isActive &&
          'bg-primary text-on-primary hover:bg-primary hover:text-on-primary'
        }`}
      >
        <Icon name={item.icon} color="text-inherit" />
        {item.name}
      </li>
    </a>
  );
}
