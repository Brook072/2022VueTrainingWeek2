<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

let token = localStorage.getItem("token");
const router = useRouter();
const username = ref("");
const password = ref("");
const apiUrl = "https://vue3-course-api.hexschool.io";

if (token != null) {
  router.push("/");
}

function signInPost() {
  axios
    .post(`${apiUrl}/v2/admin/signin`, {
      username: username.value,
      password: password.value,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert(res.data.message);
      router.push("/");
    })
    .catch((res) => {
      alert(res.data.message);
    });
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="h3 mb-3 text-center font-weight-normal">請先登入</h1>
        <div class="col-8">
          <form id="form" class="form-signin">
            <div class="form-floating mb-3">
              <input
                v-model="username"
                type="email"
                class="form-control"
                id="username"
                placeholder="name@example.com"
                required
                autofocus
              />
              <label for="username">Email address</label>
            </div>
            <div class="form-floating">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
              <label for="password">Password</label>
            </div>
            <button
              @click.prevent="signInPost()"
              class="btn btn-lg btn-primary w-100 mt-3"
              type="submit"
            >
              登入
            </button>
          </form>
        </div>
      </div>
      <p class="mt-5 mb-3 text-center text-muted">&copy; 2021~∞ - 六角學院</p>
    </div>
  </main>
</template>
<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
