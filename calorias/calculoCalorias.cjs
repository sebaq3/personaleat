// src/calculoCalorias.cjs

function calcularCalorias({ altura, peso, edad, nivelActividad, objetivo }) {
    // Aquí puedes implementar la lógica de cálculo de calorías según tus necesidades
    // Por ahora, simplemente retornamos un valor de ejemplo
    const factorActividad = obtenerFactorActividad(nivelActividad);
    const factorObjetivo = obtenerFactorObjetivo(objetivo);
  
    const tasaMetabolicaBasal = 10 * peso + 6.25 * altura - 5 * edad;
    const caloriasDiarias = tasaMetabolicaBasal * factorActividad * factorObjetivo;
  
    return Math.round(caloriasDiarias);
  }
  
  function obtenerFactorActividad(nivelActividad) {
    switch (nivelActividad) {
      case 'sedentario':
        return 1.2;
      case 'ligero':
        return 1.375;
      case 'moderado':
        return 1.55;
      case 'activo':
        return 1.725;
      case 'muy-activo':
        return 1.9;
      default:
        return 1.2;
    }
  }
  
  function obtenerFactorObjetivo(objetivo) {
    switch (objetivo) {
      case 'mantenimiento':
        return 1.0;
      case 'perdida-peso':
        return 0.8;
      case 'aumento-peso':
        return 1.2;
      default:
        return 1.0;
    }
  }
  
  module.exports = {
    calcularCalorias,
  };
  