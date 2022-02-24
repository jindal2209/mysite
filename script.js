function loadWidget() {
  let shiprocketPincode = 110022;//shiprocket.pincodeHelper();
  let shiprocketWidget = `<div class="shiprocket_pincode--widget">
    <input inputmode="numeric" pattern="\d{6}" value="${shiprocketPincode != null ? shiprocketPincode : ''}" onpaste="return false;" onkeypress="return shiprocket.preventAlphabet(event)" type="number" name="pincode" placeholder="For eg. 560002" class="shiprocket_pincode--input" autocorrect="off" autocomplete="off" autocapitalize="off" spellcheck="false">
          {% if template contains 'product' %}
          <input type="hidden" class="shiprocket_product--sku" value="{{ product.selected_or_first_available_variant.sku }}">
          {% endif %}
          <button class="shiprocket_pincode--check" class="btn btn-primary" type="button">Check</button>
          <p class="pdp-delivery-info"></p>
    </div>`;
  //Load Widget into the selector
  [...document.querySelectorAll('.shiprocket_pincode--wrapper1')].map(function (i) { i.innerHTML = shiprocketWidget });

//   {% if template contains 'product' %}
//   shiprocket.getSku();
//   {% endif %}
}

module.exports = {
  loadWidget
}
