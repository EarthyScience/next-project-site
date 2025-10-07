'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { FiSun, FiMoon } from 'react-icons/fi';

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`cursor-pointer rounded-md p-2 hover:bg-accent/50 ${className || ""}`}
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      title={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      {resolvedTheme === 'light' ? (
        <FiMoon className="size-6" />
      ) : (
        <FiSun className="size-6" />
      )}
    </Button>
  );
}