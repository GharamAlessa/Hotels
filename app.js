alert("welcom to VOCO HOTEL")

var answer = prompt("are you on vacation?.......please answer with yes or no")

if (answer == "yes") { document.write("<div>" + "<h3>" + "Chasing sunsets? Take an evening walk along the river Thames in Oxford" + "</h3>" + "<img src='https://digital.ihg.com/is/image/ihg/voco-oxford-6299119130-4x3'/>" + "</div>") } else if (answer == "no") { document.write("<div>" + "<h3>" + "Meet the modern and beautifully designed Le Cafe at voco Reading" + "</h3>" + "<img src='https://www.ihgplc.com/-/media/voco-paris-montparnasse_restaurant.jpg?h=1024&la=en&w=1280&hash=63D7E30FB83CBB8130F0D17936B3CBDB'" + "</div>") }


var vaccine = prompt("Have you took a vaccine ? [yes or no]")

if (vaccine == "yes") {

  var vaccinetype = prompt("choose a vaccine type please [astrazeneca,pfizer,sinovac]")

  while (vaccinetype != "astrazeneca" && vaccinetype != "pfizer" && vaccinetype != "sinovac") {
    vaccinetype = prompt("Sorry u should take one of these types only choose again [astrazeneca,pfizer,sinovac] ")

  }
  alert("we will be happy to host you")
}

else alert("Sorry u must take a vaccine before booking")

var rate = prompt("Please Rate Our servec From 1 to 5")
if (rate == "1" || "2" || "3" || "4" || "5") {
  for (var y = 1; y <= rate; y++)
    document.write("<span id='doc'>*</span>")
}
alert("thanks for rating")

