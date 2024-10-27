
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Show({ filterCourseFunction, addCourseToCartFunction }) {
    return (
        <div className="container">
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Sorry, no matching Product found.
                </p>
            ) : (
                <div className="row">
                    {filterCourseFunction.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card text-center carda">
                                <img src={product.image} alt={product.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Price: KES {product.price}</p>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => addCourseToCartFunction(product)}
                                    >
                                        Add to Shopping Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Show;
