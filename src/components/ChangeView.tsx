import { ReactNode } from 'react';

export interface ChangeViewProps {
  contentView: 'tiles' | 'list';
  setContentView: (value: 'tiles' | 'list') => void;
}

export const ChangeView = ({
  setContentView,
  contentView,
}: ChangeViewProps): ReactNode => {
  const changeView = () => {
    if (contentView === 'tiles') {
      setContentView('list');
    } else {
      setContentView('tiles');
    }
  };

  return (
    <button
      className="text-black dark:text-white hover:opacity-80 active:opacity-50 h-fit p-2 border-r-2 dark:bg-gray-800 "
      onClick={changeView}
    >
      {contentView === 'list' ? (
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <rect
            className="fill-gray-500 dark:fill-gray-400"
            width="50"
            height="50"
            rx="10"
          />
          <rect
            className="fill-gray-500 dark:fill-gray-400"
            x="70"
            width="50"
            height="50"
            rx="10"
          />
          <rect
            className="fill-gray-500 dark:fill-gray-400"
            x="70"
            y="70"
            width="50"
            height="50"
            rx="10"
          />
          <rect
            className="fill-gray-500 dark:fill-gray-400"
            y="70"
            width="50"
            height="50"
            rx="10"
          />
        </svg>
      ) : (
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <g clipPath="url(#clip0_705_9)">
            <rect
              className="fill-gray-500 dark:fill-gray-400"
              width="120"
              height="28"
              rx="10"
            />
            <rect
              className="fill-gray-500 dark:fill-gray-400"
              y="46"
              width="120"
              height="28"
              rx="10"
            />
            <rect
              className="fill-gray-500 dark:fill-gray-400"
              y="92"
              width="120"
              height="28"
              rx="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_705_9">
              <rect width="120" height="120" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
};
