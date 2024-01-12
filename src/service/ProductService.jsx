export const ProductService = {
  getDetail(params) {
    return fetch(`https://madeinmongolia.asia/api/v2/products/detail/${params}`)
      .then((res) => res.json())
      .then((d) => d.data);
  },
  getRelated(getId) {
    return fetch(`https://madeinmongolia.asia/api/v2/products/related/${getId}`)
      .then((res) => res.json())
      .then((d) => d.data);
  },
  getTopSellers(getId) {
    return fetch(
      `https://madeinmongolia.asia/api/v2/products/top-from-seller/${getId}`
    )
      .then((res) => res.json())
      .then((d) => d.data);
  },
  getNew() {
    return fetch(
      `https://madeinmongolia.asia/api/v2/products/new-product`
    )
      .then((res) => res.json())
      .then((d) => d.data);
  },
  getWeek() {
    return fetch(
      `https://madeinmongolia.asia/api/v2/products/big-swiper-4`
    )
      .then((res) => res.json())
      .then((d) => d.data);
  },
  getWeek2() {
    return fetch(
      `https://madeinmongolia.asia/api/v2/products/big-swiper-2`
    )
      .then((res) => res.json())
      .then((d) => d.data);
  },
  getGrid() {
    return fetch(
      `https://madeinmongolia.asia/api/v2/products/home-category-2`
    )
      .then((res) => res.json())
      .then((d) => d.data);
  },
};