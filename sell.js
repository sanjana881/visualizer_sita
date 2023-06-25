function addProductField() {
    var productFields = document.getElementById('productFields');
   
    var newProductField = document.createElement('div');
    newProductField.className = 'product-field';
   
    var productNameInput = document.createElement('input');
    productNameInput.type = 'text';
    productNameInput.name = 'product_name[]';
    productNameInput.placeholder = 'Product Name';
    productNameInput.required = true;
   
    var productImageInput = document.createElement('input');
    productImageInput.type = 'file';
    productImageInput.name = 'product_image[]';
    productImageInput.accept = 'image/*';
    productImageInput.required = true;
   
    var descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.name = 'description[]';
    descriptionTextarea.placeholder = 'Description';
    descriptionTextarea.required = true;
   
    var addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.textContent = 'Add Another Product';
    addButton.onclick = addProductField;
   
    newProductField.appendChild(productNameInput);
    newProductField.appendChild(productImageInput);
    newProductField.appendChild(descriptionTextarea);
    newProductField.appendChild(addButton);
   
    productFields.appendChild(newProductField);
  }
  
  