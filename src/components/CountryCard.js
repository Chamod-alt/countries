
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, push, set, onValue } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function CountryCard({ country }) {
  const [user] = useAuthState(auth);
  const [isFavorite, setIsFavorite] = useState(false);
  const db = getDatabase();

  //  Check if already in favorites
  useEffect(() => {
    if (!user) return;

    const favoritesRef = ref(db, `favorites/${user.uid}`);
    const unsubscribe = onValue(favoritesRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const alreadyFavorited = Object.values(data).some(
          fav => fav.countryName === country.name.common
        );
        setIsFavorite(alreadyFavorited);
      } else {
        setIsFavorite(false);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [user, country.name.common, db]);

  //  Add to favorites
  const addToFavorites = () => {
    if (!user) {
      alert("Please log in to favorite countries.");
      return;
    }

    const favoritesRef = ref(db, `favorites/${user.uid}`);
    const newFavRef = push(favoritesRef);

    set(newFavRef, {
      countryName: country.name.common,
      flag: country.flags.png,
      region: country.region,
      population: country.population,
      languages: country.languages || {},
      timestamp: Date.now()
    })
      .then(() => alert(`${country.name.common} added to favorites!`))
      .catch(err => {
        console.error("Error adding favorite:", err);
        alert("Failed to add favorite.");
      });
  };

  return (
    <div className="card h-100">
      <img src={country.flags.png} className="card-img-top" alt={country.name.common} style={{height:"220px"}}/>
      <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
        <p className="card-text"><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
        <p className="card-text"><strong>Region:</strong> {country.region}</p>
        <p className="card-text"><strong>Population:</strong> {country.population?.toLocaleString()}</p>
        <p className="card-text">
          <strong>Languages:</strong>{' '}
          {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
        </p>

        {isFavorite ? (
          <p className="mt-2 text-success fw-bold">This is in your favorites</p>
        ) : (
          <button onClick={addToFavorites} className="btn btn-outline-success mt-2">❤️ Favorite</button>
        )}
      </div>
    </div>
  );
}

export default CountryCard;



