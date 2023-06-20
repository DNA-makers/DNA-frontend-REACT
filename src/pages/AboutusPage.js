import React from "react";
import "./AboutUs.css";

const AboutusPage = () => {
    return (
        <div>
            <section className="aboutusContainer">
                <ul>
                    <h3>Belangrijke informatie over MijnDNAmedicatiepas.nl</h3>
                    <li><a href="#Header1">Hoe wij meten en testen</a></li>
                    <li><a href="#Header2">Het idee van mijnDNAmedicatiepas.nl</a></li>
                    <li><a href="#Header3">Privacygevoeligheid</a></li>
                    <li><a href="#Header4">Samenwerkingen met andere ziekenhuizen</a></li>
                    <li><a href="#Header5">Bereikbaarheid</a></li>
                </ul>

                <article>
                    <h1>Over MijnDNAmedicatiepas.nl</h1>
                    <section className="aboutus_cards_container">
                        <article>
                            <h2 id="Header1">Hoe wij meten en testen</h2>
                            <p>Wij testen door uitgebreid laboratoriumonderzoek. We verzamelen menselijke 
                                DNA-monsters van patiënten met de specifieke genetische aandoening waarvoor ze een medicijn willen ontwikkelen.
                                Met behulp van geavanceerde sequentietechnologieën ontcijferen ze het DNA en identificeren ze 
                                specifieke genetische mutaties die verband houden met de aandoening.
                            </p>
                        </article>

                        <article>
                            <h2 id="Header2">Het idee van MijnDNAmedicatiepas.nl</h2>
                            <p>
                            Het idee achter het DNA-medicatiebedrijf MijnDNAmedicatiepas is om medicijnen te ontwikkelen die gericht 
                            zijn op het behandelen van genetische aandoeningen. Ze maken gebruik van geavanceerde 
                            DNA-sequentietechnologieën om genetische mutaties te identificeren die verband houden met 
                            bepaalde aandoeningen. Vervolgens ontwikkelen ze medicijnen die specifiek zijn ontworpen om 
                            deze genetische afwijkingen te corrigeren of de symptomen ervan te verminderen.
                            </p>
                        </article>

                        <article>
                            <h2 id="Header3">Privacygevoeligheid</h2>
                            <p>
                            MijnDNAmedicatiepas implementeert strikte beveiligingsmaatregelen om de gegevens te beschermen tegen 
                            ongeoorloofde toegang, verlies, diefstal of misbruik. Dit omvat het gebruik van encryptie, 
                            firewalls en andere technische en organisatorische maatregelen om de vertrouwelijkheid en integriteit 
                            van de gegevens te waarborgen. Daarnaast beperken we de toegang tot de privacygevoelige gegevens 
                            tot alleen geautoriseerd personeel dat betrokken is bij het onderzoek en de ontwikkeling van medicijnen. 
                            We zorgen ervoor dat alleen diegenen die een gerechtvaardigde reden hebben om toegang te hebben tot 
                            de gegevens, daadwerkelijk toegang krijgen, en ze implementeren strikte interne protocollen en 
                            controles om ongeoorloofde toegang te voorkomen.
                            </p>
                        </article>

                        <article>
                            <h2 id="Header4">Samenwerkingen met andere ziekenhuizen</h2>
                            <p>
                            Wij kunnen samenwerkingsverbanden aangaan met ziekenhuizen om onderzoeksprojecten uit te voeren. 
                            Hierbij kunnen we gezamenlijke onderzoeksprotocollen opstellen en de expertise en faciliteiten 
                            van het ziekenhuis benutten om genetische gegevens van patiënten te verzamelen en te analyseren. 
                            Dit stelt het bedrijf in staat om bredere toegang te krijgen tot relevante patiëntpopulaties en 
                            om gegevens te verzamelen die relevant zijn voor hun medicijnontwikkeling.
                            </p>
                        </article>

                        <article>
                            <h2 id="Header5">Bereikbaarheid</h2>
                            <p>
                                Voor vragen die niet beantwoord worden op de FAQ pagina kan je ons bereiken via het emailadres: mijnmedicatiepas@info.com. Ons telefoon nummer is:
                                0673847384
                            </p>
                        </article>
                    </section>

                </article>
                
            </section>
        </div>
    )
}

export default AboutusPage;