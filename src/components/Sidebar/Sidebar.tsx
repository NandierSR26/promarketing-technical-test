import { MenuItems } from '@/constants';
import React from 'react';
import { SidebarMenuItem } from '..';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center gap-5 w-[300px] bg-slate-800  rounded-md  px-5 py-10">
      {
        MenuItems.map(item => (
          <SidebarMenuItem key={item.id} {...item} />
        ))
      }
    </aside>
  )
}
