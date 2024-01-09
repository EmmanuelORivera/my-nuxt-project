<template>
  <NuxtLayout>
    <!--NuxtPage works as router view components-->
    <header>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="events">Events</NuxtLink></li>
      </ul>
    </header>
    <NuxtPage />
  </NuxtLayout>
</template>
