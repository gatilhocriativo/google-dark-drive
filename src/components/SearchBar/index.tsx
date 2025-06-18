import {
  Search,
  DescriptionOutlined,
  PersonOutline,
  FolderOutlined,
  CalendarMonthOutlined,
  ArrowDropDown,
} from '@mui/icons-material';
import { Icon } from '../Icon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

type Filter = {
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  name: string;
};

const FILTERS: Filter[] = [
  {
    name: 'Tipo',
    icon: DescriptionOutlined,
  },
  {
    name: 'Pessoas',
    icon: PersonOutline,
  },
  {
    name: 'Modificado',
    icon: CalendarMonthOutlined,
  },
  {
    name: 'Local',
    icon: FolderOutlined,
  },
];

export function SearchBar() {
  return (
    <form className="flex flex-col gap-6">
      <div className="relative">
        <button className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 rounded-full hover:bg-surface-2 flex items-center justify-center">
          <Icon name={Search} />
        </button>
        <input
          type="text"
          className="w-[752px] h-12 rounded-full bg-surface-1 outline-none pl-11 py-3 pr-3 focus:bg-surface-0 shadow-search-shadow"
          placeholder="Pesquisar no drive"
        />
      </div>
      <div className="flex gap-3 justify-center">
        {FILTERS.map((item) => (
          <button
            key={item.name}
            className="flex gap-1 justify-center items-center px-3 py-2 rounded-full bg-surface-1 hover:bg-surface-0 transition-colors"
          >
            <Icon name={item.icon} />
            <div>{item.name}</div>
            <Icon name={ArrowDropDown} />
          </button>
        ))}
      </div>
    </form>
  );
}
