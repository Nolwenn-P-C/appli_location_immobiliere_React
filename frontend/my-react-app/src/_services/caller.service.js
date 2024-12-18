const baseURL = 'http://localhost:8080/api';

// Fonction pour récupérer toutes les propriétés
const APIPropriétés = async () => {
  try {
    const response = await fetch(baseURL+`/properties`);

    if (!response.ok) {
      throw new Error(`Erreur : ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération de toutes les propriétés :", error);
    throw error; 
  }
};

// Fonction pour récupérer une propriété spécifique par ID
const APIPropriétéID = async (id) => {
  try {
    const response = await fetch(baseURL+`/properties/${id}`);

    if (!response.ok) {
      throw new Error(`Erreur : ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de la propriété avec l'ID ${id} :`, error);
    throw error; 
  }
};

export const API = {
    APIPropriétés, APIPropriétéID
}