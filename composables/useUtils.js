// import CryptoJS from "crypto-js";

// export const usePublicKey = () => {
//   return useState("publicKey", () => "ca276f1f1ea2910a9ab6bdad77351456");
// };

// export const usePrivateKey = () => {
//   return useState(
//     "privateKey",
//     () => "08215c72d6eeeb3f04362005654dc13baa913d9b"
//   );
// };

// export const useHashKey = () => {
//   const ts = new Date().getTime().toString();
//   const hash = CryptoJS.MD5(ts + usePrivateKey() + usePublicKey());
//   return hash;
// };
