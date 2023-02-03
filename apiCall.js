fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(apiCall);

let container = document.querySelector(".col");

function apiCall(Date) {
  var MyData = Date.products;
  let cartona = ``;
  for (let i = 0; i < 28; i++) {
    cartona += `
    
    
    
    <div class="col-lg-3 col-md-4 my-3">
    
    <div class="card  rounded-3 text-center h-100" style="box-shadow:5px 5px 5px gray">
    <h5 class="card-title p-2 fw-bolder">${MyData[i].title}</h5>
  <img src="${
    MyData[i].images[2] ? MyData[i].images[2] : "lg.jpg"
  }" class="card-img-top p-4 rounded-3" height="250px" alt="Products">
  <div class="card-body">
    
    <a href="showProduct.html" class="btn btn-dark">Shop Now</a>
  </div>
</div>
    </div>`;
  }
  container.innerHTML = cartona;
}
