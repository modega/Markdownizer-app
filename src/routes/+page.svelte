<script>
	let username = 'username'
	let password = 'password'
	/**
   * @type {string | null}
   */
	let result = null
	
	async function doPost () {
		const res = await fetch('api/backend-handler/login', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Require-Whisk-Auth': 'Wo859brrmgAKUi8'
            },
			body: JSON.stringify({
                username,
                password
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}
</script>

<h1>home</h1>
<p>this is the home page.</p>

<section class="flex flex-column justify-center p-1">
  <form>
    <label>
      Username
      <input bind:value={username} autocomplete="off" type="text" />
    </label>
    <label>
      Password
      <input bind:value={password} type="password" />
    </label>
    <button type="button" on:click={doPost} class="rounded-full bg-cyan-400 p-2 m-auto">Login</button>
  </form>
</section>
<h2>{result}</h2>