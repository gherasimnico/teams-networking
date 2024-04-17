import "./style.css";

function getTeamAsHTML(team) {
  console.info("inside map");
  return `  <tr>
                <td>${team.promotion}</td>
                <td>${team.members}</td>
                <td>${team.name}</td>
                <td>${team.url}</td>
                <td>x</td>
            </tr>`;
}

function renderTeams(teams) {
  const teamsHTML = teams.map(getTeamAsHTML);

  document.querySelector("#teamsTable tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("http://localhost:3000/teams-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(r => r.json())
    .then(teams => {
      renderTeams(teams);
    });
}
loadTeams();
