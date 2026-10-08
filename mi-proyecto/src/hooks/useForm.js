import { useState } from 'react';

/**
 * Custom Hook para control de formularios
 * Gestiona el estado de los inputs, la captura de cambios y el reseteo
 */
export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`[Form Event] Input '${name}' cambió a:`, value);
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    console.log('[Form Event] Formulario reseteado a sus valores iniciales');
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
    setValues,
  };
};

export default useForm;
