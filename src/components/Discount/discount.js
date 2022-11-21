export function Discount({chair}) {
    function getSalePrice(n,p) {
        return n - (n * (p/100));
    }
    return(
        <div>
            {chair.discount > 0
                    ? <div className="priceDiscounted">
                        <p className="originalPrice">{chair.price}.00 €</p>
                        <p className="discountPrice">{getSalePrice(chair.price, chair.discount)}.00 €</p>
                    </div>
                    : <p className="no-discount">{chair.price}€</p>}
        </div>
    )
}