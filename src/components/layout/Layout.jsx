import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen overflow-hidden  bg-gray-50'>
      <Navbar />

      <div className='flex flex-1 overflow-hidden gap-4'>
        <Sidebar />
        <main className='flex-1 overflow-y-auto p-6 '>
          <div className='max-w-7xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
