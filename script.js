window.shiprocket = window.shiprocket || {};

window.shiprocket = {
  loadWidget: function () {
    let shiprocketPincode = shiprocket.pincodeHelper();
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

    {% if template contains 'product' %}
    shiprocket.getSku();
    {% endif %}
  },
  preventAlphabet: function (evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode < 48 || charCode > 57))
      return false;
    return true;
  },
  pincodeHelper: function (pincodeData) {

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

  },
  getSku: function (shiprocketVariant) {
    let variantId = shiprocketVariant || (document.querySelector("[name=id]") && document.querySelector("[name=id]").value) || (document.querySelector("[shiprocketVariantId]") && document.querySelector("[shiprocketVariantId]").getAttribute("shiprocketVariantId")) || 0;

    let product_json = {{ product | json
  }
} || (document.querySelector("[shiprocketVariantId]") && document.querySelector("[shiprocketProductJSON]").getAttribute("shiprocketProductJSON")) || {};
let variants = product_json.variants || {};
let shiprocketProductSKU = '';

variants.forEach(function (variant) {
  if (variant.id == variantId && variant.sku != '') {
    shiprocketProductSKU = variant.sku;
  }
});
[...document.querySelectorAll('.shiprocket_product--sku')].map(function (i) { i.value = shiprocketProductSKU });
return shiprocketProductSKU;
    },
getSkus: function () {
  let cartJSON = {{ cart | json
}};
let itemArray = [];

for (i = 0; i < cartJSON.items.length; i++) {
  itemArray.push({
    sku: cartJSON.items[i].sku,
    quantity: cartJSON.items[i].quantity
  });
}
return itemArray;
    },
variantIdChange: function(e) {
  let variantSku = 0;
  if (e.target && e.target.tagName && e.target.tagName.toLowerCase() == 'select') {
    variantSku = shiprocket.getSku();
    return variantSku;
  }
  return false;
},
customVariantIdTrackElement: function () {
  let target = document;
  var observer = new WebKitMutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName == 'shiprocketvariantid') {
        return shiprocket.getSku();
      }
    });
  });
  observer.observe(target, { attributes: true, childList: true, subtree: true });
},
checkDelivery: function(e) {

  console.log("getDeliveryData")
  window.open("https://www.google.com/")

  if (e.target.classList.contains("shiprocket_pincode--check")) {
    let el = e.target;
    let ParentElement = el.closest(".shiprocket_pincode--widget");
    let pincodeEntered = ParentElement.querySelector(".shiprocket_pincode--input").value;
    if (pincodeEntered != "" && shiprocket.pincodeHelper(pincodeEntered)) {


      let skus = [];
      let pincodeData = {};
      pincodeData.company_id = "{{ shop.metafields.shipRocket.company_id }}";
      pincodeData.pincode = pincodeEntered;

      {% if template contains 'product' %}

      pincodeData.sku_list = [];

      pincodeData.sku_list.push({
        sku: shiprocket.getSku(),
        quantity: (document.querySelector('form[action="/cart/add"] [name=quantity]') && document.querySelector('form[action="/cart/add"] [name=quantity]').value) || 1
      });

      {% elsif template contains 'cart' %}
      pincodeData.sku_list = shiprocket.getSkus();
      {% endif %}


      shiprocket.getDeliveryData(ParentElement, pincodeData);
    } else {
      console.log('Invalid Pincode!');
    }
  }
},
getDeliveryData: function(el, pincodeData) {
  console.log("getDeliveryData")
  fetch('https://sr-wms-stage-api-1.kartrocket.com/v1/warehouse/srf-serviceability-new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pincodeData),
  })
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        let data = response.data;
        el.querySelector(".pdp-delivery-info").innerHTML = `<span class="delivery_icon ${data.icon ? 'found' : 'not-found'}"><img src="${data.icon}"></span><span><span class="order_cutoff">${data.order_cutoff}</span><span class="delivery_dt">${data.delivery_date_text}</span></span>`;
        el.querySelector(".pdp-delivery-info").classList.add("success");
        el.querySelector(".pdp-delivery-info").classList.remove("error");
      } else {
        el.querySelector(".pdp-delivery-info").classList.add("error");
        el.querySelector(".pdp-delivery-info").classList.remove("success");
        el.querySelector(".pdp-delivery-info").innerHTML = "Pincode not serviceble";
        $('[name="add"]').attr('disabled', true);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
},
renderAjax: async function () {
  let ajaxElem = document.querySelector('.shiprocket-ajaxcart-delivery-info');
  let pincode = shiprocket.pincodeHelper();
  let lineItemArray = [];

  if (ajaxElem && pincode != null) {
    fetch('/cart.js', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(cart => {
        for (i = 0; i < cart.items.length; i++) {
          lineItemArray.push({
            sku: cart.items[i].sku,
            quantity: cart.items[i].quantity
          });
        }


        let pincodeAjaxData = {};
        pincodeAjaxData.company_id = "{{ shop.metafields.shipRocket.company_id }}";
        pincodeAjaxData.pincode = pincode;
        pincodeAjaxData.sku_list = lineItemArray;




        fetch('https://sr-wms-stage-api-1.kartrocket.com/v1/warehouse/srf-serviceability-new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pincodeAjaxData),
        })
          .then(response => response.json())
          .then(response => {
            if (response.success) {
              let data = response.data;
              ajaxElem.innerHTML = `<span class="delivery_icon ${data.icon ? 'found' : 'not-found'}"><img src="${data.icon}"></span><span><span class="order_cutoff">${data.order_cutoff}</span><span class="delivery_dt">${data.delivery_date_text}</span></span>`;
              ajaxElem.classList.remove('shiprocket-hidden');
            } else {
              ajaxElem.innerHTML = "Pincode not serviceble";
              ajaxElem.classList.remove('shiprocket-hidden');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            ajaxElem.classList.add('shiprocket-hidden');
          });
      })
  }
},
init: function () {
  {% unless template contains 'cart' %}
  if (!document.querySelector('[name=id]')) {
    shiprocket.customVariantIdTrackElement();
  }
  {% endunless %}

  shiprocket.loadWidget();
  document.addEventListener("change", shiprocket.variantIdChange);
  document.addEventListener("click", shiprocket.checkDelivery);
}
  }


document.addEventListener("DOMContentLoaded", function (event) {
  {% if show - widget %}
  shiprocket.init();
  {% endif %}
});

module.exports = {
  shiprocket: window.shiprocket
};
