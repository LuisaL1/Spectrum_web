const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SHORT_FIELD_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 2000;

function normalize(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(body) {
  const errors = [];

  const nombre = normalize(body?.nombre);
  const correo = normalize(body?.correo);
  const empresa = normalize(body?.empresa);
  const mensaje = normalize(body?.mensaje);

  if (!nombre || nombre.length > MAX_SHORT_FIELD_LENGTH) {
    errors.push("nombre");
  }

  if (!correo || correo.length > MAX_SHORT_FIELD_LENGTH || !EMAIL_REGEX.test(correo)) {
    errors.push("correo");
  }

  if (!empresa || empresa.length > MAX_SHORT_FIELD_LENGTH) {
    errors.push("empresa");
  }

  if (mensaje.length > MAX_MESSAGE_LENGTH) {
    errors.push("mensaje");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: { nombre, correo, empresa, mensaje },
  };
}
