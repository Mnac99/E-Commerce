
const Product = ({price,id,title,image,category}) => {
    return (
        <div key={id} className="product">
            <strong>{title}</strong>
            <i>{category}</i>
            {price}
            <img src={image} alt={title} />
        </div>
    )
}
export default Product;