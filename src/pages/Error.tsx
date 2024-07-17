import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ErrorProps {
  code: number;
  message: string;
}

const Header = (props: ErrorProps): ReactNode => {
  return (
    <section className="bg-white dark:bg-gray-900 h-full flex items-center p-2">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 tracking-tight font-bold text-gray-900 dark:text-white">
          {props.code}
        </h1>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          {props.message}
        </p>
        <Link
          to="/"
          className="inline-flex text-black dark:text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};

export default Header;
