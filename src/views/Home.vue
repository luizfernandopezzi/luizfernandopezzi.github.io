<template>
  <section class="home">
    <article class="title">
      <div class="hello">
        <h1>{{ getterLanguage.homePage.title }}</h1>
        <h1 class="name">Luiz Fernando!</h1>
        <h2>{{ getterLanguage.homePage.description }}</h2>
      </div>
    </article>
        <img
          class="profile-photo"
          src="../assets/fotoperfil.jpg"
          alt="Profile photo"
        />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: mapGetters(["getterLanguage"]),
};
</script>

<style scoped>
.hello {
  padding: 1rem;
  align-items: center;
}
.home {
  padding: 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.name {
  color: #8c0c5c;
}
.profile-photo {
  height: 60vh;
  border-radius: 2rem;
}

@media only screen and (max-width: 720px) {
  .home {
    flex-direction: column;
  }
  .profile-photo {
    max-height: 40vh;
    padding: 2vh;
    border-radius: 2rem;
  }
  .hello {
    text-align: center;
  }
  .title {
    height: 20vh;
    justify-content: center;
  }
}
</style>
