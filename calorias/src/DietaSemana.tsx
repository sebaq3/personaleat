import React, { useState, useEffect } from 'react';
import MenusDiarios from './MenusDiarios';

interface DietaSemanaProps {
  datosUsuario: {
    altura: number | string;
    peso: number | string;
    edad: number | string;
    nivelActividad: string;
    objetivo: string;
  };
  caloriasDiarias: number;
}

const DietaSemana: React.FC<DietaSemanaProps> = ({ datosUsuario, caloriasDiarias }) => {
  const [dietaSemana, setDietaSemana] = useState([]);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  useEffect(() => {
    const generarDietaSemana = () => {
      const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      const dietaGenerada = diasSemana.map((dia) => ({
        dia,
        comidas: ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'], // Puedes agregar más comidas o detalles según sea necesario
        menuDiario: null, // Agrega un campo para el menú diario
      }));
      setDietaSemana(dietaGenerada);
    };

    generarDietaSemana();
  }, [datosUsuario]);

  const handleClickDia = (dia) => {
    setDiaSeleccionado(dia);
  };

  const renderDetallesDia = () => {
    if (diaSeleccionado) {
      return (
        <div>
          <h3>Detalles para el {diaSeleccionado}</h3>
          {/* Renderiza el menú diario si está disponible */}
          {dietaSemana.find((dia) => dia.dia === diaSeleccionado)?.menuDiario ? (
            <MenusDiarios caloriasDiarias={caloriasDiarias} />
          ) : (
            <p>No hay detalles disponibles.</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>Dieta Semanal</h2>
      <div>
        <h3>Datos del Usuario</h3>
        <p>Altura: {datosUsuario.altura} cm</p>
        <p>Peso: {datosUsuario.peso} kg</p>
        <p>Edad: {datosUsuario.edad} años</p>
        <p>Nivel de Actividad: {datosUsuario.nivelActividad}</p>
        <p>Objetivo: {datosUsuario.objetivo}</p>
        <p>Calorías Diarias: {caloriasDiarias}</p>
      </div>
      <div>
        <h3>Dieta de la Semana</h3>
        <ul>
          {dietaSemana.map((dia) => (
            <li key={dia.dia} onClick={() => handleClickDia(dia.dia)}>
              {dia.dia}
            </li>
          ))}
        </ul>
      </div>
      {renderDetallesDia()}
    </div>
  );
};

export default DietaSemana;