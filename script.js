function loadWidget() {
  let shiprocketPincode = pincodeHelper();
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

  // {% if template contains 'product' %}
  // shiprocket.getSku();
  // {% endif %}
}

function pincodeHelper(pincodeData) {

  if (pincodeData) {
    pincodeData = parseInt(pincodeData);
    if (/^[1-9]{1}[0-9]{5}$/.test(pincodeData)) {
      localStorage.setItem("shiprocketPincode", pincodeData);
      return pincodeData;
    }
    return false;
  }

  if (localStorage.getItem("shiprocketPincode") == null) {
    return null;
  } else {
    return localStorage.getItem("shiprocketPincode");
  }
}

window.shiprocket = {
  a: 10,
}

window.onload = () => {
  console.log("Script loaded");
  console.log(window.shiprocket.a)
}
