/********** FETCHES **********/
function getAllAnimals() {
    return fetch("http://localhost:3000/animals")
      .then(response => response.json())
  }
  function createAnimal(animalObj) {
    return fetch('http://localhost:3000/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(animalObj),
    })
      .then(response => response.json())
  }
  function updateDonations(id, donationCount) {
    return fetch(`http://localhost:3000/animals/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        donations: donationCount
      }),
    })
      .then(response => response.json())
  }
  function deleteAnimal(id) {
    return fetch(`http://localhost:3000/animals/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
  }