<script>
    import "../app.css";
    export const prerender = true;
  </script>

<nav class="flex flex-row justify-evenly p-2 text-lg text-cyan-600 font-bold">
    <a href="/">Home</a>
    <a href="/register">Register</a>
</nav>

<slot />