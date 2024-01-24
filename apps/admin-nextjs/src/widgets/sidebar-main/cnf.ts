'use client';

import { ActivitySquare, Network, Users, Package, Album, Image, Newspaper, LucideIcon } from 'lucide-react';

export type SidebarGroup = {
  label: string;
  icon: LucideIcon;
  base?: string;
  href?: string;
  items?: {
    label: string;
    href: string;
  }[];
}

export const sidebars: SidebarGroup[] = [
  { label: 'Dashboard', icon: ActivitySquare, href: '/' },
  {
    label: 'Users',
    icon: Users,
    base: '/user',
    items: [
      { label: 'List user', href: '' },
      { label: 'Banned users', href: '/banned' },
    ],
  },
  {
    label: 'Products',
    icon: Package,
    href: '#',
  },
  {
    label: 'Orders',
    icon: Album,
    href: '#',
  },
  {
    label: 'Blog',
    icon: Newspaper,
    base: '/blog',
    items: [
      { label: 'New article', href: '/new' },
      { label: 'List article', href: '' },
      { label: 'Taxonomy', href: '/taxonomy' },
    ],
  },
  {
    label: 'Media',
    icon: Image,
    href: '#',
  },
  {
    label: 'Admin',
    icon: Network,
    base: '/admin',
    items: [
      { label: 'List admin', href: '' },
      { label: 'Role setting', href: '/role' },
      { label: 'Group setting', href: '/group' },
    ],
  },
];