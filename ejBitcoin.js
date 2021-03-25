fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(function(response) {
        console.log(response.json());
    })
    .then(function(data) {
        let selectCountry = document.getElementById("country");
        for (let i = 0; i < data.length; i++) {
            if (data[i].region == "Americas") {
                selectCountry.innerHTML += "<option value='" + data[i].name + "'>" + data[i].name + "</option>"
            }
        }
    })