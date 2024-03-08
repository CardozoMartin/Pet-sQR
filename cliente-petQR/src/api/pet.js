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

export const deletePetFn = async (petId) => {
  const token = sessionStorage.getItem("token");

  const res = await fetch(`${API_URL}/pet/${petId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(
      resData.message || "ocurrio un error al eliminar la mascota"
    );
  }
};

export const putPetFn = async (petId) => {
  const token = sessionStorage.getItem("token");
  console.log(petId);
  const res = await fetch(`${API_URL}/pet/${petId.id}`, { // Aquí usamos petId.id
    method: "PUT",
    body: JSON.stringify({ ...petId }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Ocurrió un error al editar la mascota");
  }
};

