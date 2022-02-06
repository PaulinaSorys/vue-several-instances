// One vue instance can controll only one html element at once.
// In other words, vue instance can only be mounted to one element.
Vue.createApp({
  data() {
    return {
      dummyVariable: "I enjoy riding a bike a lot."
    }
  }
}).mount(".app")

Vue.createApp({
  data() {
    return {
      otherDummyVariable: "My second favourite is roller skating."
    }
  }
}).mount("#app")

// The above is NOT a common practice. It may be useful sometimes, for example
// when creating several widgets for a website you may consider creating
// a separate vue instance for each of them.
