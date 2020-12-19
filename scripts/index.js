const fish = [{
    name: "shark",
    picture: "../pictures/shark.jpg",
    info: "<h2> shark </h2> <p> This is a shark </p>"
},
{
    name: "mandarin-fish",
    picture: "../pictures/mandarinfish.jpg",
    info: "<h2> mandarin fish </h2> <p> This is a mandarin fish </p>" 
}





,
{
    name: "crab",
    picture: "../pictures/crab-350w.jpg",
    altText: "big crab staring at the camera",
    info: `<h2 class="info-name">Blue Dungeness Crabs</h2>
    <p class="info-text">is a species of crab that inhabits eelgrass beds and water bottoms on the west coast of North America. It typically grows to 20 cm (7.9 in) across the carapace and is a popular seafood. Its common name comes from the port of Dungeness, Washington, United States, where it is "a prized crustacean that supports the most valuable fishery on the west coast", and where ocean acidification threatens the marine environment.</p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
            <p>Photo by <a href="https://unsplash.com/@davidclode?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">David Clode</a> on <a href="https://unsplash.com/s/photos/crab?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
        </li>
        <li class="info-item">
            <a href="https://en.wikipedia.org/wiki/Dungeness_crab" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>`
},
{
    name: "octopus",
    picture: "../pictures/octopus-350w.jpg",
    altText: "an octopus resting on the ocean floor",
    info: `<h2 class="info-name">Octopus</h2>
    <p class="info-text">is a soft-bodied, eight-limbed mollusc of the order Octopoda (/ɒkˈtɒpədə/, ok-TO-pə-də). Around 300 species are recognised, and the order is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids. Like other cephalopods, the octopus is bilaterally symmetric with two eyes and a beak, with its mouth at the center point of the eight limbs.</p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
        <span>Photo by <a href="https://unsplash.com/@catou9?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">viatour cathy</a> on <a href="https://unsplash.com/s/photos/octopus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </li>
        <li class="info-item">
            <a href="https://en.wikipedia.org/wiki/Dungeness_crab" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>`
},
{
    name: "sea-star",
    picture: "../pictures/sea-star.jpg",
    altText: "A red sea star with neon blue tube feet ",
    info: `<h2 class="info-name">Giant Sea Star</h2>
    <p class="info-text">is a species of crab that inhabits eelgrass beds and water bottoms on the west coast of North America. It typically grows to 20 cm (7.9 in) across the carapace and is a popular seafood. Its common name comes from the port of Dungeness, Washington, United States, where it is "a prized crustacean that supports the most valuable fishery on the west coast", and where ocean acidification threatens the marine environment.is a species of sea star that lives along the western coast of North America from Southern California to British Columbia. It makes its home on rocky shores near the low tide mark. It preys on mollusks. It can grow as large as 24 in (61 cm) in diameter. Its color varies from brown to red or purple. </p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
            <p>Photo by <a href="https://commons.wikimedia.org/wiki/File:Sandstar_300.jpg">Wikimedia</a></p>
        </li>
        <li class="info-item">
            <a href="https://en.wikipedia.org/wiki/Pisaster_giganteus" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>`
}]




function button(event)
{ 
    /*
    iterating through each fish in the array and passing the animal card that is clicked on
    */
    var animal = event.currentTarget.id;
    var obj;
    fish.forEach(element => {
        if (animal == element.name){
            obj=element

        }
        
    });
    var displayInfo = document.querySelector(".display-info")
    displayInfo.innerHTML=obj.info
    var displayPicture = document.querySelector("#display-picture")
    displayPicture.src= obj.picture
    displayPicture.alt = obj.altText;
} 



