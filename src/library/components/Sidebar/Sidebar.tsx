import { MenuItems } from '@/shared/constants';
import React from 'react';
import { SidebarMenuItem } from '..';

export const Sidebar = () => {
  return (
    <aside className="flex justify-center items-center gap-5 w-full bg-slate-800  rounded-md  px-5 py-2">
      {
        MenuItems.map(item => (
          <SidebarMenuItem key={item.id} {...item} />
        ))
      }
    </aside>
  )
}
