import { defineStore } from "pinia";
import CryptoJS from "crypto-js";

export const useProductStore = defineStore("product", {
  state: () => ({
    publicKey: "ca276f1f1ea2910a9ab6bdad77351456",
    privateKey: "08215c72d6eeeb3f04362005654dc13baa913d9b",
    ts: new Date().getTime().toString(),
    hash: "",
  }),
  getters: {
    hash() {
      return CryptoJS.MD5(this.ts + this.privateKey + this.publicKey);
    },
  },
});
