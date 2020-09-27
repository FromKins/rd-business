const API_URL = 'https://dev-api.skindialogue.id/';
let PAGE_PRODUCTS = 1,
    EL_LIST_PRODUCTS = '#products-lists',
    SEARCH_PRODUCTS = '#products-products';

function generateListProduct(data) {
    let template = `
        <div class="col-md-4 col-6 mb-4 mb-sm-4 mt-6">
        <div class="card flex-column justify-content-center align-items-center">
        <a href="#" class="w-100">
        <img style="width: 100%; height:auto;" src="https://dev-api.skindialogue.id/storage/${data.main_photo.file}"/></a>
        <a href="#" class="mb-1 pt-4 text-body small font-weight-bold category-name">${data.category.name}</a>
        <a href="#" class="product-link font-size-1">${data.name}</a>
        <span class="font-weight-bold mt-3 mb-1">IDR ${data.price}</span>
        <span class="font-weight-bold price-retail mb-4">
        <span class="font-weight-normal font-size-small">Reseller</span> IDR ${data.price_retail}
        <span class="font-weight-normal font-size-small"> + Point</span>
        </span>
        </div>
        </div>
        `;


    return template;
}

function tampilkanProducts() {
    $.ajax({
        url: `https://dev-api.skindialogue.id/api/v1/public/products?page=1&category=&brand`,
        dataType: "json",
        success: function (result) {
            for (let i = 0; i < result.data.length; i++) {
                $(EL_LIST_PRODUCTS).append(generateListProduct(result.data[i]));
            }
        }
    })
}
tampilkanProducts();

// $('#search-products').on('keyups', function (e) {
//     if (e.which === 13) {
//         console.log(e)
//     }
// });