import { ReactNode } from 'react';

const Header = (): ReactNode => {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 dark:border-gray-700 sticky top-0 w-full h-16">
      <div className="flex flex-wrap items-center justify-between px-2 py-4 max-w-5xl mx-auto">
        <h1 className="text-black dark:text-white text-2xl">Тестовое задание</h1>
      </div>
    </nav>
  );
};

export default Header;
