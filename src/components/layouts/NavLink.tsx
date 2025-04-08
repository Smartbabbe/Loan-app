'use client';
import Link from 'next/link';
import { cn } from '../utils';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-foreground/80',
        isActive ? 'font-semibold' : 'font-normal',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
