<script>
	let username = 'username'
	let password = 'password'
    let confirmPassword = 'confirmPassword'
    let email = 'email'
    let name = 'name'
    let lastName = 'lastName'
	/**
   * @type {string | null}
   */
	let result = null
	
	async function doPost () {
		const res = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70a04b6f-5f1e-4e06-8f93-3603eed02683/backend-handler/register', {
			method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-Require-Whisk-Auth': 'Bx0mw0gXmJ6TMgU'
      },
			body: JSON.stringify({
                username,
                password,
                email,
                name,
                lastName
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}
</script>

<h1>home</h1>
<p>this is the register page.</p>

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
    <label>
      Confirm Password
      <input bind:value={confirmPassword} type="password" />
    </label>
    <label>
      Email
      <input bind:value={email} type="email" />
    </label>
    <label>
      Name
      <input bind:value={name} type="text" />
    </label>
    <label>
      Last Name
      <input bind:value={lastName} autocomplete="off" type="text" />
    </label>
    <button type="button" on:click={doPost} class="rounded-full bg-cyan-400 p-2 m-auto">Register</button>
  </form>
</section>
<h2>{result}</h2>