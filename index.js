function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const repoList = '<ul>' + repos.map(r => {
    return (`
      `
      )
  }).join('') + "</ul>"
  document.getElementById("repositories").innerHTML = repoList
}
