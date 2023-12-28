// src/CaloriasCalculator.tsx

import React, { useState } from 'react';

const CaloriasCalculator: React.FC = () => {
  const [altura, setAltura] = useState<number | string>('');
  const [peso, setPeso] = useState<number | string>('');
  const [edad, setEdad] = useState<number | string>('');
  const [nivelActividad, setNivelActividad] = useState<string>('sedentario');
  const [objetivo, setObjetivo] = useState<string>('mantenimiento');
  const [caloriasDiarias, setCaloriasDiarias] = useState<number | null>(null);

  const handleCalcularCalorias = async () => {
    // Validar que se ingresen todos los datos necesarios
    if (!altura || !peso || !edad) {
      alert('Por favor, ingresa todos los campos obligatorios.');
      return;
    }

    // Realizar la solicitud POST al servidor
    const response = await fetch('/calcular-calorias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        altura,
        peso,
        edad,
        nivelActividad,
        objetivo,
      }),
    });

    // Verificar si la solicitud fue exitosa
    if (response.ok) {
      const data = await response.json();
      setCaloriasDiarias(data.caloriasDiarias);
    } else {
      // Manejar errores si la solicitud no fue exitosa
      alert('Hubo un error al procesar la solicitud.');
    }
  };

  return (
    <div>
      <h2>Calculadora de Calorías</h2>
      <form>
        <label>
          Altura (cm):
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </label>
        <br />
        <label>
          Peso (kg):
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
        <br />
        <label>
          Edad:
          <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <br />
        <label>
          Nivel de Actividad:
          <select value={nivelActividad} onChange={(e) => setNivelActividad(e.target.value)}>
            <option value="sedentario">Sedentario</option>
            <option value="ligero">Ligero</option>
            <option value="moderado">Moderado</option>
            <option value="activo">Activo</option>
            <option value="muy-activo">Muy Activo</option>
          </select>
        </label>
        <br />
        <label>
          Objetivo:
          <select value={objetivo} onChange={(e) => setObjetivo(e.target.value)}>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="perdida-peso">Pérdida de Peso</option>
            <option value="aumento-peso">Aumento de Peso</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleCalcularCalorias}>
          Calcular Calorías
        </button>
      </form>
      {caloriasDiarias !== null && (
        <p>Calorías diarias necesarias: {caloriasDiarias}</p>
      )}
    </div>
  );
};

export default CaloriasCalculator;
