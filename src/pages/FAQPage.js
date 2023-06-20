import React from "react";
import "./FAQPage.css";

function FAQPage() {
  return (
    <div className="faq-page">
      <section className="faq">
        <section className="container">
          <h2 className="h2">FAQ - Veelgestelde vragen</h2>
          <details className="style4">
            <summary>Wat wordt er met mijn gegevens gedaan?</summary>
            <div className="content">
              <p>
                Bij ons bedrijf hechten we grote waarde aan de privacy en
                veiligheid van de gegevens van onze gebruikers. Wanneer u uw
                gegevens met ons deelt, worden deze zorgvuldig behandeld en
                beveiligd volgens de geldende wet- en regelgeving met betrekking
                tot gegevensbescherming. Uw persoonlijke gegevens worden
                uitsluitend gebruikt voor het leveren van onze diensten en het
                verstrekken van medicatieadvies.
              </p>
            </div>
          </details>
          <details className="style4">
            <summary>Waarop wordt jullie advies gebaseerd?</summary>
            <div className="content">
              <p>
                Ons advies is gebaseerd op gedegen wetenschappelijk onderzoek en
                de analyse van uw genetische informatie. Door middel van
                geavanceerde DNA-analyse kunnen we specifieke genetische
                variaties identificeren die van invloed kunnen zijn op uw
                reactie op bepaalde medicijnen. We vergelijken uw genetische
                profiel met een uitgebreide database van wetenschappelijke
                literatuur en farmacologische kennis om een gepersonaliseerd
                medicatieadvies te geven.
              </p>
            </div>
          </details>
          <details className="style4">
            <summary>Wat gebeurt er als ik mijn pas kwijtraak?</summary>
            <div className="content">
              <p>
                Indien u uw pas kwijtraakt, raden wij u aan om zo spoedig
                mogelijk contact met ons op te nemen. We zullen de nodige
                maatregelen treffen om ervoor te zorgen dat uw verloren pas
                ongeldig wordt gemaakt en niet kan worden misbruikt. U kunt een
                nieuwe pas aanvragen en we zullen ervoor zorgen dat al uw
                eerdere gegevens veilig worden overgedragen naar de nieuwe pas.
                Onze klantenservice staat altijd klaar om u te helpen bij het
                oplossen van eventuele problemen met uw pas.
              </p>
            </div>
          </details>
          <details className="style4">
            <summary>Hoe hebben jullie getest?</summary>
            <div className="content">
              <p>
                Onze dienst is ontwikkeld en gevalideerd op basis van
                uitgebreide wetenschappelijke studies en klinische testen. We
                hebben samengewerkt met gerenommeerde genetici, farmacologen en
                medische professionals om ervoor te zorgen dat ons systeem
                nauwkeurige en betrouwbare resultaten levert. De effectiviteit
                van ons medicatieadvies is getest in gecontroleerde omgevingen
                en we hebben de resultaten vergeleken met traditionele
                behandelmethoden. We streven voortdurend naar de verbetering van
                onze diensten door middel van voortdurend onderzoek en de
                integratie van de nieuwste wetenschappelijke ontwikkelingen.
              </p>
            </div>
          </details>
          <details className="style4">
            <summary>Hoe zit het met de AVG?</summary>
            <div className="content">
              <p>
                Bij ons bedrijf nemen we de bescherming van persoonsgegevens
                zeer serieus en voldoen we aan de Algemene Verordening
                Gegevensbescherming (AVG), ook wel bekend als de GDPR (General
                Data Protection Regulation). De AVG is een Europese wet die de
                privacyrechten van individuen beschermt en bepaalt hoe
                organisaties persoonsgegevens moeten verwerken en beheren.
                Conform de AVG zorgen we ervoor dat uw persoonsgegevens op een
                rechtmatige, eerlijke en transparante manier worden verwerkt. We
                verzamelen alleen de gegevens die nodig zijn om onze diensten te
                leveren en gebruiken deze uitsluitend voor het verstrekken van
                medicatieadvies. Uw gegevens worden veilig opgeslagen en
                beschermd tegen onbevoegde toegang, verlies of diefstal.
                Daarnaast bieden we u als gebruiker van onze diensten diverse
                rechten die worden beschermd door de AVG. Dit omvat onder andere
                het recht om uw persoonsgegevens in te zien, te corrigeren, te
                verwijderen en bezwaar te maken tegen de verwerking ervan. We
                hebben passende technische en organisatorische maatregelen
                getroffen om ervoor te zorgen dat uw rechten worden
                gerespecteerd en nageleefd.
              </p>
            </div>
          </details>

          <p className="p">
            Wij hopen dat deze antwoorden uw vragen beantwoorden. Mocht u nog
            verdere vragen hebben, aarzel dan niet om contact met ons op te
            nemen. We staan klaar om u te helpen en meer informatie te
            verstrekken over ons systeem en de privacy- en
            veiligheidsmaatregelen die we hanteren.
          </p>
        </section>
      </section>
    </div>
  );
}

export default FAQPage;
