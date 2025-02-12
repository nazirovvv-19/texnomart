import { create } from "zustand";

const smthStore = () => ({
  counter: [
    {
      image:
        "https://assets.asaxiy.uz/product/items/desktop/18af1e70998a3eb5bb8dfc1467524c702024092117002998224xz3BDnoHbp.webp",
      name: "Iphone 16 pro max",
      sale_price: 13506158,
      soni: 1,
    },
  ],
  count: [
    {
      image:
        "https://assets.asaxiy.uz/product/items/desktop/18af1e70998a3eb5bb8dfc1467524c702024092117002998224xz3BDnoHbp.webp",
      name: "Iphone 16 pro max",
      sale_price: 13506158,
      soni: 1,
    },
  ],
  nav_section: [],
});
const useSmthStore = create(smthStore);

export default useSmthStore;
