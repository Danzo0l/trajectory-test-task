import { Routing } from '@/pages';
import { withProviders } from './providers';
import Header from '@/components/Header';

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <div className="box-border h-full dark:bg-gray-900 relative">
      <Header />
      <Routing />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withProviders(App);
