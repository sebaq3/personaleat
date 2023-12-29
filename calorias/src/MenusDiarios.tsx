// src/MenusDiarios.tsx

import React from 'react';

interface MenuDiarioProps {
  caloriasDesayuno: number;
  caloriasAlmuerzo: number;
  caloriasCena: number;
  caloriasSnacks: number;
}

const MenusDiarios: React.FC<MenuDiarioProps> = ({
  caloriasDesayuno,
  caloriasAlmuerzo,
  caloriasCena,
  caloriasSnacks,
}) => {
  return (
    <div>
      <h3>Menú Diario</h3>
      <p>Desayuno - Calorías: {caloriasDesayuno}</p>
      <p>Almuerzo - Calorías: {caloriasAlmuerzo}</p>
      <p>Cena - Calorías: {caloriasCena}</p>
      <p>Snacks - Calorías: {caloriasSnacks}</p>
    </div>
  );
};

export default MenusDiarios;
