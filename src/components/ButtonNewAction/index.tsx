'use client';

import {
  Add,
  CreateNewFolder,
  DriveFolderUpload,
  UploadFile,
} from '@mui/icons-material';
import { Icon } from '../Icon';
import { useEffect, useRef, useState } from 'react';

export function ButtonNewAction() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return document.addEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  function handleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleClickOutside(event: MouseEvent) {
    if (dropdown.current && !dropdown.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  return (
    <div className="relative h-full">
      <button
        onClick={handleDropdown}
        className="flex gap-2 items-center p-4 bg-surface-2 rounded-2xl shadow hover:shadow-lg hover:bg-surface-3 transition-colors"
      >
        <Icon name={Add} />
        <span>Novo</span>
      </button>
      {isOpen && (
        <div
          className="absolute inset-0 bg-surface-2 py-2 w-[260px] h-fit rounded z-20"
          ref={dropdown}
        >
          <ul className="h-full flex flex-col gap-2">
            <li className="w-full">
              <button className="flex gap-2 px-3 py-1 items-center hover:bg-surface-1 w-full">
                <Icon name={CreateNewFolder} />
                <span>Nova Pasta</span>
              </button>
            </li>
            <li className="w-full">
              <div className="h-[1px] w-full bg-surface-1"></div>
            </li>
            <li className="w-full">
              <button className="flex gap-2 px-3 py-1 items-center hover:bg-surface-1 w-full">
                <Icon name={UploadFile} />
                <span>Upload de arquivo</span>
              </button>
            </li>
            <li className="w-full">
              <button className="flex gap-2 px-3 py-1 items-center hover:bg-surface-1 w-full">
                <Icon name={DriveFolderUpload} />
                <span>Upload de pasta</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
