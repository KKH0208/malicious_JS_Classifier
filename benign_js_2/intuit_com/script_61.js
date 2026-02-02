/* 元のURL: https://intuit.com */

 document.addEventListener("DOMContentLoaded", (event) => {
    //update the new svg url below
    var newSvgUrl = 'https://quickbooks.intuit.com/oidam/intuit/ic/en_us/logos/gwp-footer/mailchimp-logo-dark.svg'
    var mcLink = document.querySelector('div[data-testid="products"] a[data-ui-object-detail="mailchimp"] img')
    mcLink.src = 'https://www.intuit.com/oidam/intuit/ic/en_us/logos/mailchimp-logo-dark-20230906.svg';
  });



