import React from 'react';

const ConfigMenu = () => {
  return (
    <div className="config-menu">
      <ul>
        <li><a href="/settings">Ajustes</a></li>
        <li><a href="/account">Cuenta</a></li>
        <li><a href="/help">Ayuda</a></li>
      </ul>
    </div>
  );
};

export default ConfigMenu;
