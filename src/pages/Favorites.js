
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Navbar from '../components/Navbar';

function Favorites() {
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) return;

    const db = getDatabase();
    const userFavoritesRef = ref(db, `favorites/${user.uid}`);

    const unsubscribe = onValue(userFavoritesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const favList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setFavorites(favList);
      } else {
        setFavorites([]);
      }
    });

    return () => unsubscribe();
  }, [user]);

  const removeFavorite = (favId) => {
    const db = getDatabase();
    const favRef = ref(db, `favorites/${user.uid}/${favId}`);
    remove(favRef)
      .then(() => console.log("Removed favorite"))
      .catch(err => console.error("Failed to remove:", err));
  };

  if (!user) {
    return <div className="container mt-5"><h4>Please login to view your favorite countries.</h4></div>;
  }

  return (
    /*
    <div className="container mt-4">
      <h2 className="mb-4">Your Favorite Countries</h2>
      <div className="row gx-3 gy-4">
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map((fav) => (
            <div className="card col-md-4 mb-3" key={fav.id}>
              <img src={fav.flag} className="card-img-top" alt={fav.countryName} />
              <div className="card-body">
                <h5 className="card-title">{fav.countryName}</h5>
                <p className="card-text">Region: {fav.region}</p>
                <p className="card-text">Population: {fav.population?.toLocaleString() || 'N/A'}</p>
                <p className="card-text">
                  Languages: {typeof fav.languages === 'object'
                    ? Object.values(fav.languages).join(', ')
                    : fav.languages || 'N/A'}
                </p>
                <button className="btn btn-danger" onClick={() => removeFavorite(fav.id)}>
                   Remove Favorite
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    */

   <div>
   <Navbar></Navbar>
    <div className="container mt-4">
  <h2 className="mb-4">Your Favorite Countries</h2>
  <div className="row gx-3 gy-4">
    {favorites.length === 0 ? (
      <p>No favorites yet.</p>
    ) : (
      favorites.map((fav) => (
        <div className="col-12 col-sm-6 col-md-4" key={fav.id}>
          <div className="card h-100">
            <img src={fav.flag} className="card-img-top" alt={fav.countryName} style={{height:"210px"}}/>
            <div className="card-body">
                <hr />
              <h5 className="card-title">{fav.countryName}</h5>
              <p className="card-text">Region: {fav.region}</p>
              <p className="card-text">Population: {fav.population?.toLocaleString() || 'N/A'}</p>
              <p className="card-text">
                Languages:{' '}
                {typeof fav.languages === 'object'
                  ? Object.values(fav.languages).join(', ')
                  : fav.languages || 'N/A'}
              </p>
              <button className="btn btn-danger" onClick={() => removeFavorite(fav.id)}>
                Remove Favorite
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
</div>
</div>
  );
}

export default Favorites;
