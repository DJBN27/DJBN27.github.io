const pages = [
  "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton", "Burnley",
  "Chelsea", "Crystal Palace", "Everton", "Fulham",
  "Leeds United", "Liverpool", "Manchester city", "Manchester United",
  "Newcastle United", "Nottingham Forest", "Sunderland",
  "Tottenham", "West Ham", "Wolverhampton"
];


document.getElementById("searchbar").addEventListener("input", function() {
  let query = this.value.toLowerCase();
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // clear old results

  if (query) {
    let matches = pages.filter(page => page.toLowerCase().includes(query));
    matches.forEach(match => {
      let div = document.createElement("div");
      div.textContent = match;

      // Redirect to the correct file in the "teams" folder
      div.onclick = () => {
        window.location.href = "teams/" + match + ".html";
      };

      resultsDiv.appendChild(div);
    });
  }
});
