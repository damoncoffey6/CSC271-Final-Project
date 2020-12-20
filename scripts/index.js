
// Global information about animals
// Scroll down for function implementation
const fish = [
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
        <span>Photo by <a href="https://unsplash.com/@catou9?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Viatour Cathy</a> on <a href="https://unsplash.com/s/photos/octopus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
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
}
,
{
    name: "shark",
    picture: "../pictures/shark-350w.jpg",
    altText: "thresher shark swimming",
    info: `<h2 class="info-name">Thresher Shark</h2>
    <p class="info-text">Thresher sharks are large lamniform sharks of the family Alopiidae found in all temperate and tropical oceans of the world; the family contains three extant species, all within the genus Alopias.
                    All three thresher shark species have been listed as vulnerable to extinction by the World Conservation Union since 2007. All are popular sport fish. In addition, they are hunted for their meat, livers (for shark liver oil), skin (for leather), and fins for use in shark-fin soup.</p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
            <!-- Always going to be where we obtained the photo -->
            <p>Photo by <a href="https://www.elasmodiver.com/Thresher_Sharks_of_Magical_Malapascua.html">Elasmodiver</a></p>
        </li>
        <li class="info-item">
            <!-- Always going to be where we obtained the information -->
            <a href="https://en.wikipedia.org/wiki/Thresher_shark" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>`
}
,
{
    name: "stingray",
    picture: "../pictures/stringray-350w.jpg",
    altText: "A cownose stingray swimming gracefully",
    info: `<h2 class="info-name">Cownose Stingray</h2>
    <p class="info-text">The cownose ray (Rhinoptera bonasus) is a species of eagle ray found throughout a large part of the western Atlantic and Caribbean, from New England, United States to southern Brazil (East Atlantic populations are now generally considered a separate species, R. marginata). Cownose rays grow rapidly, and male rays often reach about 35 inches (89 cm) in width and weigh 26 pounds (12 kg). Females typically reach 28 inches (71 cm) in width and weigh 36 pounds (16 kg). These rays also belong to the order Myliobatiformes, a group that is shared by bat rays, manta rays, and eagle rays.</p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
            <!-- Always going to be where we obtained the photo -->
            <span>Photo by <a href="https://unsplash.com/@catou9?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">David Clode</a> on <a href="https://unsplash.com/s/photos/octopus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </li>
        <li class="info-item">
            <!-- Always going to be where we obtained the information -->
            <a href="https://en.wikipedia.org/wiki/Cownose_ray" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>`
}
,
{
    name: "mandarinfish",
    picture: "../pictures/mandarinfish-350w.jpg",
    altText: "2 mandarin fish chilling",
    info: `<h2 class="info-name">Mandarin Fish</h2>
    <p class="info-text">Synchiropus splendidus, the mandarinfish or mandarin dragonet, is a small, brightly colored member of the dragonet family, which is popular in the saltwater aquarium trade. The mandarinfish is native to the Pacific, ranging approximately from the Ryukyu Islands south to Australia. It can usually be found in some of the warmer waters.</p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
            <!-- Always going to be where we obtained the photo -->
            <p>Photo by <a href="https://www.elasmodiver.com/Thresher_Sharks_of_Magical_Malapascua.html">Elasmodiver</a></p>
        </li>
        <li class="info-item">
            <!-- Always going to be where we obtained the information -->
            <a href="https://en.wikipedia.org/wiki/Cownose_ray" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>`  
}
,
{
    name: "dolphin",
    picture: "../pictures/dolphin-350w.jpg",
    altText: "a happy dolphin looking at something",
    info: `<h2 class="info-name">Bottlenose Dolphin</h2>
    <p class="info-text">Bottlenose dolphins, the genus Tursiops, are the most common members of the family Delphinidae, the family of oceanic dolphin. Molecular studies show the genus contains three species: the common bottlenose dolphin (Tursiops truncatus), the Indo-Pacific bottlenose dolphin (Tursiops aduncus), and the Burrunan dolphin (Tursiops australis). Bottlenose dolphins inhabit warm and temperate seas worldwide, being found everywhere except for the Arctic and Antarctic Circle regions. Their name derives from the Latin tursio (dolphin) and truncatus for their characteristic truncated teeth.</p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
            <!-- Always going to be where we obtained the photo -->
            <span>Photo by <a href="https://unsplash.com/@aberkecz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ádám Berkecz</a> on <a href="https://unsplash.com/s/photos/dolphin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </li>
        <li class="info-item">
            <!-- Always going to be where we obtained the information -->
            <a href="https://en.wikipedia.org/wiki/Bottlenose_dolphin" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>` 
}
,
{
    name: "blue-whale",
    picture: "../pictures/blue-whale-350w.jpg",
    altText: "a blue whale breaching the surface",
    info: `<h2 class="info-name">Blue Whale</h2>
    <p class="info-text">The blue whale (Balaenoptera musculus) is a marine mammal belonging to the baleen whale suborder Mysticeti. Reaching a maximum confirmed length of 29.9 meters (98 feet) and weight of 173 tonnes (190 tons), it is the largest animal known to have ever existed. The blue whale’s long and slender body can be various shades of grayish-blue dorsally and somewhat lighter underneath.</p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
            <!-- Always going to be where we obtained the photo -->
            <span>Photo by <a href="https://unsplash.com/@toddcravens?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Todd Cravens</a> on <a href="https://unsplash.com/s/photos/whale?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </li>
        <li class="info-item">
            <!-- Always going to be where we obtained the information -->
            <a href="https://en.wikipedia.org/wiki/Blue_whale" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>` 
}
,
{
    name: "sealion",
    picture: "../pictures/sea-lion-350w.jpg",
    altText: "a colony of sea lions resting on the rocks",
    info: `<h2 class="info-name">Sea Lion</h2>
    <p class="info-text">Sea lions are pinnipeds characterized by external ear flaps, long foreflippers, the ability to walk on all fours, short, thick hair, and a big chest and belly. Together with the fur seals, they comprise the family Otariidae, eared seals, which contains six extant and one extinct species (the Japanese sea lion) in five genera. Their range extends from the subarctic to tropical waters of the global ocean in both the Northern and Southern Hemispheres, with the notable exception of the northern Atlantic Ocean.</p>
    <h2 class="info-nextstep">Find Out More</h2>
    <ul class="info-list">
        <li class="info-item">
            <!-- Always going to be where we obtained the photo -->
            <span>Photo by <a href="https://unsplash.com/@sergiogonzalez2024?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sergio Gonzalez</a> on <a href="https://unsplash.com/s/photos/sea-lion?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </li>
        <li class="info-item">
            <!-- Always going to be where we obtained the information -->
            <a href="https://en.wikipedia.org/wiki/Sea_lion" class="info-link">Information from Wikipedia</a>
        </li>
    </ul>`
}


]



// Finds the information through linear search of an array of 
// objects
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



