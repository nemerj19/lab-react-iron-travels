import React from "react";

function FavoritesList({ favoritePlans }) {
  return (
    <div className="FavoritesList">
      <h2>Favorites</h2>
      <div className="list">
        {favoritePlans &&
          favoritePlans.map((plan) => (
            <div className="FavoritePlanCard" key={plan.id}>
              <div className="top-section">
                <img src={plan.image} alt={plan.destination} />
              </div>
              <div className="bottom-section">
                <h2>
                  {plan.destination}{" "}
                  <span className="sub-heading">({plan.days} Days)</span>
                </h2>
                <p>
                  <b>Price:</b> {plan.totalCost} €{" "}
                </p>
              </div>
            </div>
          ))}
      </div>
      {favoritePlans.length === 0 && <p>No favorites added yet.</p>}
    </div>
  );
}

export default FavoritesList;
