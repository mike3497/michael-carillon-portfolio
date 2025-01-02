<template>
  <header class="bg-white text-black border-b-4 border-black sticky top-0 z-50">
    <nav class="container flex flex-row items-center justify-between h-16">
      <div>
        <NuxtLink class="font-bold" to="/">
          &lt;&gt;Michael Carillon&lt;/&gt;
        </NuxtLink>
      </div>
      <div class="flex flex-row gap-4">
        <NuxtLink
          class="border-b-2 border-transparent hover:border-black"
          to="/"
          activeClass="font-bold"
        >
          Home
        </NuxtLink>
        <span>|</span>
        <NuxtLink
          class="border-b-2 border-transparent hover:border-black"
          to="/experience"
          activeClass="font-bold"
        >
          Experience
        </NuxtLink>
        <span>|</span>
        <NuxtLink
          class="border-b-2 border-transparent hover:border-black"
          to="/projects"
          activeClass="font-bold"
        >
          Projects
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
