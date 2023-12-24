'use client';

import { IMenuItem } from '@/interfaces';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarMenuItemProps extends IMenuItem {}

export const SidebarMenuItem = ({ path, text }: SidebarMenuItemProps) => {

  const pathname = usePathname()

  return (
    <Link
      href={path}
      className={`bg-slate-700 rounded-lg p-2 w-full text-center ${pathname === path && 'bg-slate-900'} text-white`}
    >
      {text}
    </Link>
  )
}
