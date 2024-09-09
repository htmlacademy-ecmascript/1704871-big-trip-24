
function createTripInfoCost(point) {
  return `<p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">${point}</span>
          </p>`;
}

export {createTripInfoCost};
