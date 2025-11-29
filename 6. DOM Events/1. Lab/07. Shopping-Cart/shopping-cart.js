document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let products = new Set();
   let totalPrice = 0;

   const allAddBtnElements = document.querySelectorAll('.add-product');
   const resultTextareaElement = document.querySelector('textarea');
   const checkoutBtnElement = document.querySelector('.checkout');

   for(const addBtn of allAddBtnElements){
      addBtn.addEventListener('click', handleAddProduct);
   }

   function handleAddProduct(event){
      const fullProductDivElement = event.target.parentElement.parentElement;
      const productTitleDivElement = fullProductDivElement.querySelector('.product-title');
      const productTitle = productTitleDivElement.textContent;
      products.add(productTitle);

      const productPriceDivElement = fullProductDivElement.querySelector('.product-line-price');
      const productPrice = Number(productPriceDivElement.textContent);
      totalPrice+=productPrice;

      resultTextareaElement.value +=`Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   checkoutBtnElement.addEventListener('click', handleCheckoutProducts);

   function handleCheckoutProducts(event){
      const productsArr = Array.from(products);
      resultTextareaElement.value +=`You bought ${productsArr.join(', ')} for ${totalPrice.toFixed(2)}.`

      checkoutBtnElement.disabled = true;

      for(const addBtnEl of allAddBtnElements){
         addBtnEl.disabled = true;
      }
   }
}
