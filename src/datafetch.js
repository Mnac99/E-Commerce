const dataFetch = async ()    => {
    return fetch("https://fakestoreapi.com/products").
    then((res) => res.json()).
    then((data) => data);
}
export default dataFetch;