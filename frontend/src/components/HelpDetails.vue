<template>
  <section>
    <details open>
      <summary>ONLINE AVAILABILITY OF AN ITEM</summary>
      <div>
        <img src="https://static.zara.cn/photos///contents/mkt/spots/aw22-help-customer/subhome-xmedia-items-sizes//w/563/landscape-96355a30-52cc-4411-86f6-4fcada393076_0.jpg?ts=1672218637303" />
        <p>We suggest you check our website to keep up to date with the latest news and availability of our products.
If the size of the item you are interested in is out of stock, but has the Coming soon option, you can provide us with your email address and we will let you know if it is available again in the next 15 days. If it is not restocked within this period, the subscription will expire and you will have to re-register it. This process does not reserve the item.
On some items, we may display a low stock message for certain sizes. If any of them are of interest to you, we encourage you to buy them so that you don't miss out.
Bear in mind that the items in the basket are not reserved. If your basket includes items that are no longer available, we will notify you so that you can remove them and complete the purchase of the other items.
</p>
      </div>
    </details>
    <details>
      <summary></summary>
      <div>
        <img src="" />
        <p></p>
      </div>
    </details>
    <details>
      <summary>ORDER STATUS</summary>
      <div>
        <img src="https://static.zara.net/photos///contents/mkt/spots/aw22-help-customer/subhome-xmedia-purchases//w/436/landscape-1e069b8a-173e-4b23-bbdd-1f6705ad9282_0.jpg?ts=1672218488792" />
        <p>You can track your order in your account, on the Purchases section.
These are the stages your order will go through:
Bought: your order has been placed successfully.
Being processed: weve received your order details.
Being prepared: your order is being prepared in our warehouse.
Sent: your order has already left our premises.
Collected by courier: your order is on its way and will be delivered soon.
Delivered to customer: your order has been delivered.
Bear in mind you will receive updates on the status of your order by email.</p>
      </div>
    </details>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HelpDetails',
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Karla|Space+Mono");

:root {
  --contentHeight: 30vh;
  --sectionWidth: 700px;
}

* {
  outline: 0;
  box-sizing: border-box;
}

body {
  background-color:white;
}

section {
  max-width: var(--sectionWidth);
  margin: 40px auto;
  width: 97%;
  color: #fff;
}

summary {
  display: block;
  cursor: pointer;
  padding: 10px;
  font-family: "Space Mono", monospace;
  font-size: 22px;
  transition: .3s;
  border-bottom: 2px solid;
  user-select: none;
}

details > div {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  user-select: none;
  padding: 0 20px;
  font-family: "Karla", sans-serif;
  line-height: 1.5;
}

details > div > img {
  align-self: flex-start;
  max-width: 100%;
  margin-top: 20px;
}

details > div > p {
  flex: 1;
  color:black;
}

details[open] > summary {
   color:black;
}

@media (min-width: 768px) {
  details[open] > div > p {
    opacity: 0;
    animation-name: showContent;
    animation-duration: 0.6s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    margin: 0;
    padding-left: 20px;
  }

  details[open] > div {
    animation-name: slideDown;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  details[open] > div > img {
    opacity: 0;
    height: 100%;
    margin: 0;
    animation-name: showImage;
    animation-duration: 0.3s;
    animation-delay: 0.15s;
    animation-fill-mode: forwards;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  to {
    opacity: 1;
    height: var(--contentHeight);
    padding: 20px;
  }
}

@keyframes showImage {
  from {
    opacity: 0;
    clip-path: inset(50% 0 50% 0);
    transform: scale(0.4);
  }

  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}

@keyframes showContent {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
