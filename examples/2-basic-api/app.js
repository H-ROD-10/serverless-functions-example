const result = document.querySelector(".result");

const fetchBasicData = async () => {
  try {
    const { data } = await axios.get("/api/2-basic-api");

    const products = data
      ?.map((product) => {
        const {
          id,
          name,
          image: { url },
          price,
        } = product;

        return `<article class="product" key=${id}>
                <img
                  src="${url}" alt="${name}"
                />
                <div class="info">
                  <h5>"${name}"</h5>
                  <h5 class="price">"$${price}"</h5>
                </div>
            </article>`;
      })
      .join("");

    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h2>there was an error. Plesse try again later</h2>`;
  }
};
fetchBasicData();
