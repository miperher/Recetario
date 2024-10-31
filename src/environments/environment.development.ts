export const environment = {
    production:false,
    firebaseConfig : {
        apiKey: "AIzaSyDW4otTBC1bBWLsIAWXieMsmDZDx1DihQw",
        authDomain: "recetario-8ac04.firebaseapp.com",
        projectId: "recetario-8ac04",
        storageBucket: "recetario-8ac04.appspot.com",
        messagingSenderId: "176475294234",
        appId: "1:176475294234:web:4827b82a0b04a287ff1fa3",
        measurementId: "G-W5EXNYGSNS"
      },

      api: {
        categories: 'www.themealdb.com/api/json/v1/1/list.php?c=list',
        nationalities: 'www.themealdb.com/api/json/v1/1/list.php?a=list',
        listByCategory:'www.themealdb.com/api/json/v1/1/filter.php?c=',
        listByNationality:'www.themealdb.com/api/json/v1/1/filter.php?a=',
        viewRecipe:'www.themealdb.com/api/json/v1/1/lookup.php?i=52772'

      }
};
