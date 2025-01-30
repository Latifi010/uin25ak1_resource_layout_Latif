const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

document.addEventListener("DOMContentLoaded", () => { //Sørger for at scriptet kjører etter at HTML er lastet inn. - https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event.
    const buttons = document.querySelectorAll(".Mainpage-b"); // Velger alle elementer med klassen Mainpage-b, setter dem i variablen buttons. - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector. 

    const katTittel = document.querySelector(".ressurser-kat");
    const katText = document.querySelector(".ressurser-text");
    const resList = document.querySelector(".ressurser-list");
    //Velger elementene med klassene ressurser-kat, ressurser-text og ressurser-list, setter dem i variablene katTittel, katText og resList. 

    function displayResources(category) { //https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter.
        const filteredResources = resources.filter(res => res.category === category);  

       if (filteredResources.length === 0) return; //Ikke nødvendig å ha med i dette tilfelle, men kan være nyttig ettersom man utvikler videre. Sørger for at det ikke blir vist noe på siden, dersom det ikke er noen ressurser i kategorien som blir valgt. 
        
        const selectedCategory = filteredResources[0];
        katTittel.textContent = selectedCategory.category;
        katText.textContent = selectedCategory.text;
        
        resList.innerHTML = selectedCategory.sources.map( //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map.
            source => `
            <li>
            <a href="${source.url}" target="_blank"> ${source.title} </a>
            </li>`
        ).join(""); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join.
    }

    // displayResources-funksjonen: Sørger for at riktig informasjon blir vist på siden, basert på hvilken kategori som blir valgt.
    // Den filtrerer ressursene basert på kategorien som blir valgt, og setter den filtrerte kategorien i variabelen selectedCategory.
    // Deretter setter den innholdet i variablene katTittel, katText og resList til å være likt det som er i selectedCategory

    // .map og .join: Går gjennom hver source i selectedCategory.sources. Dermed lager den en liste over HTML-elementer/lenker (<a>).
    // target="_blank sørger for at lenkene åpnes i ny fane.
    // .join sørger for at det blir en sammenhengende streng av elementene. 


    buttons.forEach(button => //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener - https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach.
        {                                           
        button.addEventListener("click", () => {
            displayResources(button.textContent);
        });
    });
    
    //forEach: Går gjennom hvert element i buttons, og legger til en eventlistener på hvert element(knapp).
    //Eventlisteneren, sørger for at displayResources-funksjonen blir kalt når en knapp blir trykket på. Som oppdaterer innholdet. 



    
    displayResources("HTML");
});


