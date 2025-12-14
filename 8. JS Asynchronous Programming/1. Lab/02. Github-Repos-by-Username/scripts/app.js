async function loadRepos() {
	const usernameInputEl = document.getElementById('username');
	const reposUlEl = document.getElementById('repos');

	const username = usernameInputEl.value.trim();
	const response = await fetch('https://api.github.com/users/${username}/repos');
	const data = await response.json();
	console.log(data);

	reposUlEl.innerHTML = '';
	for(let repoObj of data){
		const liEl = document.createElement('li');
		const aEl = document.createElement('a');

		aEl.textContent = repoObj.full_name;
		aEl.href = repoObj.html_url;

		liEl.appendChild(aEl);
		reposUlEl.appendChild(liEl);
	}
}