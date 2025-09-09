fetch('produits.json')
  .then(res => res.json())
  .then(data => {
    const section = document.getElementById('produits');
    data.forEach(produit => {
      section.innerHTML += `
        <div class="produit">
          <img src="${produit.image}" alt="${produit.nom}">
          <h2>${produit.nom}</h2>
          <p>${produit.description}</p>
          <span>${produit.prix}</span>
        </div>
      `;
    });
  });
