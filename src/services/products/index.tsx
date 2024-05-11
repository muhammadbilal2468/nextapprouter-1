export const getData = async (url: string) => {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });

  const res = await fetch(url, {
    cache: "no-store",
    next: {
      tags: ["products"],
      // revalidate: 15,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};
