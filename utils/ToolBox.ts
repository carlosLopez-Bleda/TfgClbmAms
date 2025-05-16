/**
 * Verifica si el valor proporcionado es una dirección de correo electrónico válida.
 *
 * @param {string} value - El string a verificar.
 * @return {boolean} - Devuelve true si es un correo electrónico válido, de lo contrario false.
 */
const isEmail = (value: string): boolean => {
  const pattern =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\]?)$/;

  return pattern.test(value);
};

/**
 * Verifica si el valor proporcionado contiene solo números.
 *
 * @param {string} value - El string a verificar.
 * @return {boolean} - Devuelve true si contiene solo números, de lo contrario false.
 */
const isNumeric = (value: string): boolean => {
  const pattern = /^\d+$/;

  return pattern.test(value);
};

/**
 * Verifica si el valor proporcionado es una contraseña segura.
 * Requisitos: al menos una minúscula, una mayúscula, un número y entre 8 y 16 caracteres.
 *
 * @param {string} value - El string a verificar.
 * @return {boolean} - Devuelve true si la contraseña es segura, de lo contrario false.
 */
const isStrongPassword = (value: string): boolean => {
  const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

  return pattern.test(value);
};

/**
 * Formatea un número como una cadena de moneda en libras esterlinas (GBP) con símbolo.
 *
 * @param {number} value - El número a formatear.
 * @return {string} La cadena de texto con el formato de moneda.
 */
const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    currencyDisplay: 'symbol',
  }).format(value);

const ToolBox = {
  isEmail,
  isNumeric,
  formatCurrency,
  isStrongPassword,
};

export default ToolBox;
