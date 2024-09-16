import  { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className="flex w-[100vw] h-[100vh] overflow-hidden bg-black-400">
    
      <div className="h-screen w-[220px] bg-black">
        <Sidebar />
      </div>
      <section className="w-[90%] h-full">
        
        <div className="h-[70px] w-full">
          <Header />
        </div>
        <div className="h-[calc(100vh-70px)] overflow-y-auto bg-gray-200">
          {props.children}
        </div>
      </section>
    </div>
  );
}
