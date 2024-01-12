// Header.tsx

import React, { ReactNode, useEffect, useState } from "react";

interface HeaderProps {
  children: ReactNode;
  mainContent: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ mainContent, children }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Esta función se ejecutará una vez al montar el componente
  useEffect(() => {
    React.Children.forEach(children, (child) => {
      let activeItem = null;

      React.Children.forEach(child?.props.children, (element) => {
        if (React.isValidElement(element) && element.props.active === true) {
          activeItem = element;
          return;
        }
      });

      if (React.isValidElement(child) && activeItem?.props.active === true) {
        setActiveItem(activeItem.props.text);
        console.log("aja", child);
      }
    });
  }, [children]);

  return (
    <div className="flex gap-1">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const isActive = child.props.active === true;
          return React.cloneElement(child as React.ReactElement, {
            onClick: () => setActiveItem(child.props.text),
          });
        }
        return child;
      })}

      {activeItem && (
        <div className="w-full">
          <header className="bg-blue-500 p-4 w-full col-start-2 col-end-5 order-2 h-12">
            {/* Your header content goes here */}

            <p>Texto del SidebarItem activo: {activeItem}</p>
          </header>
          {mainContent}
        </div>
      )}
    </div>
  );
};

export default Header;
