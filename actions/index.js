const baseUrl="http://localhost:7000"

export function latestList(){
    const output=fetch(`${baseUrl}/latest`,
        {method:'GET'})
    .then((response) => response.json())
 
    return{
        type:'GET_LATEST',
        payload:output
    }
}


// import getProduct from '../services/getData';

// const productActions = {
//   PENDING: 'FETCH_PRODUCT_PENDING',
//   FULFILLED: 'FETCH_PRODUCT_FULFILLED',
//   REJECTED: 'FETCH_PRODUCT_REJECTED',
// };

// const fetchProduct = () => (dispatch) => {
//   dispatch({ type: productActions.PENDING });

//   getProduct()
//     .then(response => response.json())
//     .then(responseJSON => dispatch({ type: productActions.FULFILLED, payload: responseJSON }))
//     .catch(error => dispatch({ type: productActions.REJECTED, payload: error }));
// };


// export {
//     productActions,
//     fetchProduct
// };