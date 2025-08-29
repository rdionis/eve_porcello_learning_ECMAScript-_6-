// fetch with async/await
// fetch is asynchronous by definition
// with fetch, we need to convert the response to json so that we can parse the results

const githubRequest = async login => {
  let response = await fetch(`https://api.github.com/users/${login}`);

  let json = await response.json();
  let summary = `${json.name}, ${json.company}`;

  console.log(summary);
};

githubRequest("eveporcello");
githubRequest("moontahoe");
githubRequest("rdionis");
