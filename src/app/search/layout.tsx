import { PropsWithChildren } from "react";

type Props = {
  option: React.ReactNode
}

const Layout: React.FC<PropsWithChildren<Props>> = ({ option, children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-10 flex flex-col space-y-5">
        <h1 className="text-5xl">Search</h1>
        {option}
        {children}
      </div>
    </div>
  );
};

export default Layout;
