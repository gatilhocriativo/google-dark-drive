import {
  Apps,
  CheckCircleOutline,
  HelpOutline,
  Settings,
} from '@mui/icons-material';
import { Icon } from '../Icon';
import Image from 'next/image';

export function Header() {
  return (
    <div className="bg-surface-0 h-16 flex items-center justify-end px-3">
      <div className="flex gap-2 items-center">
        <span className="flex items-center justify-center h-8 w-8 bg-surface-0 hover:bg-surface-2 rounded-full transition-colors cursor-pointer">
          <Icon name={CheckCircleOutline} />
        </span>
        <span className="flex items-center justify-center h-8 w-8 bg-surface-0 hover:bg-surface-2 rounded-full transition-colors cursor-pointer">
          <Icon name={HelpOutline} />
        </span>
        <span className="flex items-center justify-center h-8 w-8 bg-surface-0 hover:bg-surface-2 rounded-full transition-colors cursor-pointer">
          <Icon name={Settings} />
        </span>
        <span className="flex items-center justify-center h-8 w-8 bg-surface-0 hover:bg-surface-2 rounded-full transition-colors cursor-pointer">
          <Icon name={Apps} />
        </span>
        <div className="h-8 w-8 rounded-full bg-slate-500 overflow-hidden">
          <Image
            src="https://www.github.com/decioneto.png"
            alt="avatar"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
}
