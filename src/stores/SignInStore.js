import { ref } from "vue";
import { defineStore } from "pinia";

export const useSignInStore = defineStore("SignIn", () => {
  const token = ref("");
  return { token };
});
