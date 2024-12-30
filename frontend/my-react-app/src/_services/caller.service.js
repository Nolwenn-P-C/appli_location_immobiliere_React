const baseURL = 'http://localhost:8080/api';

/**
 * Fonction pour récupérer tous les logements.
 * @async
 * @function APIProprietes
 * @returns {Promise<Object>} Les données des logements sous forme d'objet JSON.
 * @throws {Error} Si la requête échoue.
 */
const APILogements = async () => {
  try {
    const reponse = await fetch(baseURL + `/properties`);

    if (!reponse.ok) {
      throw new Error(`Erreur : ${reponse.status} - ${reponse.statusText}`);
    }

    const logement = await reponse.json();
    return logement;
  } catch (error) {
    console.error("Erreur lors de la récupération de tous les logements :", error);
    throw error;
  }
};

/**
 * Fonction pour récupérer un logement spécifique par ID.
 * @async
 * @function APIProprieteID
 * @param {string|number} id - L'identifiant du logement à récupérer.
 * @returns {Promise<Object>} Les données du logement sous forme d'objet JSON.
 * @throws {Error} Si la requête échoue.
 */
const APILogementID = async (id) => {
  try {
    const reponse = await fetch(baseURL + `/properties/${id}`);

    if (!reponse.ok) {
      throw new Error(`Erreur : ${reponse.status} - ${reponse.statusText}`);
    }

    const logementID = await reponse.json();
    return logementID;
  } catch (error) {
    console.error(`Erreur lors de la récupération du logement avec l'ID ${id} :`, error);
    throw error;
  }
};

/**
 * Objet contenant les fonctions API.
 * @type {Object}
 * @property {Function} APILogements - Fonction pour récupérer toutes les propriétés.
 * @property {Function} APILogementID - Fonction pour récupérer une propriété spécifique par ID.
 */
export const API = {
  APILogements,
  APILogementID
};
