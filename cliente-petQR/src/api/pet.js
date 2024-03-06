const API_URL = import.meta.env.VITE_API_URL;

export const postPetFn = async (data) => {
  const res = await fetch(`${API_URL}/pet`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("Ocurrio un error al agregar una mascota");
  }
  return data;
};

export const getPetFn = async () => {
  const res = await fetch(`${API_URL}/pet`);

  if (!res.ok) {
    throw new Error("Ocurrio un error al obtener las mascotas");
  }

  const data = res.json();
  return data;
};
