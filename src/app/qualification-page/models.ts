export interface PreviewModel {
  preview: string;
  label: string;
  url: string;
}

export interface Contact {
  symbol: any;
  row: string[];
}

export interface CareerStation {
  company: string;
  position: string;
  specialization: string;
  date: string;
  description: string;
}

export interface QAPair {
  question: string;
  answer: string;
}

export const certificatePreview: PreviewModel[] = [
  {
    preview: './assets/previews/nanodegree-intro-into-programming.jpg',
    label: 'NanoDegree - Intro Into Programming',
    url: 'assets/certificates/NanodegreeIntroToProgramming.pdf'
  },
  {
    preview: './assets/previews/nanodegree-front-end-developer.jpg',
    label: 'NanoDegree - Front End Developer',
    url: 'assets/certificates/NanodegreeFrontEndDeveloper.pdf'
  },
  {
    preview: './assets/previews/certificate-responsive-web-design.jpg',
    label: 'Zertifikat - Responsive Web Design',
    url: 'assets/certificates/FreeCodeCampCertificateResponsiveWebDesign.pdf'
  },
  {
    preview: './assets/previews/certificate-javascript-algorithms-and-data-structures.jpg',
    label: 'Zertifikat - JavaScript Algorithmen & Datenstrukturen',
    url: 'assets/certificates/FreeCodeCampCertificateJavaScriptAlgorithmsAndDataStructures.pdf'
  },
  {
    preview: './assets/previews/certificate-css-the-complete-guide.jpg',
    label: 'Zertifikat - CSS - The Complete Guide 2020 (inkl. Flexbox, Grid & Sass)',
    url: 'assets/certificates/UdemyCSSTheCompleteGuide2020.pdf'
  },
  {
    preview: './assets/previews/certificate-angular(2+)-vertehen-und-anwenden.jpg',
    label: 'Zertifikat - Angular (2+) verstehen und anwenden',
    url: 'assets/certificates/UdemyAngular(2+)VerstehenUndAnwenden.pdf'
  },
];

export const portfolio: PreviewModel[] = [
  {
    preview: './assets/previews/portfolio.png',
    label: 'Mandy\'s Portfolio',
    url: 'https://portfolio.mandy-blaschke.de/'
  },
];

export const contactData: Contact[] = [
  {
    symbol: '✉',
    row: [
      '(Anschrift auf Anfrage)',
      'Obertshausen, Deutschland']
  },
  {
    symbol: '☏',
    row: ['0152 - 23 00 14 40']
  },
  {
    symbol: '@',
    row: ['post(at)mandy-blaschke.de']
  }
];

export const station: CareerStation[] = [
  {
    company: 'Selbststudium',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '06/2020 - heute',
    description: `Seit Juni lerne ich das Framework Angular mit Hilfe von Büchern und meinem Mann.
                  Demnächst werde ich weitere Kurse bei der Udemy Inc. absolvieren, um ein umfassendenderes
                  Wissen zu erlangen und besser sowie schneller im Umgang mit dem Framework zu werden. `
  },
  {
    company: 'Udemy Inc.',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '05/2020 - 06/2020',
    description: 'In diesem Kurs habe ich mich noch einmal ausführlich mit CSS3 beschäftigt und u.a. eine Einführung in SASS erhalten.'
  },
  {
    company: 'FreeCodeCamp Inc.',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '04/2020 - 05/2020',
    description: `In den Kursen der FreeCodeCamp Inc. habe ich wiederholt und ergänzend Responsive Web Design,
                  sowie Algorithmen und Datenstrukturen in JavaScript gelernt.`
  },
  {
    company: 'Udacity Inc.',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '01/2020 - 04/2020',
    description: `Bereits neben dem Studium an der HDA habe ich mich bei den ersten Online-Kursen angemeldet und diese
                  erfolgreich abgeschlossen, da ich bereits wusste, dass ich unbedingt in den Bereich Front End Web wollte und
                  anhand der Rahmenlehrpläne ersichtlich wurde, dass dies nur einen kleinen Teil des Studiums ausmachen würde.
                  In den Kursen von Udacity habe ich eine gute Einführung in die Programmierung und das Front End Deveopment erhalten.`
  },
  {
    company: 'Hochschule Darmstadt - University of Applied Science',
    position: 'Studierende',
    specialization: 'Informatik | KMI',
    date: '10/2019 - 03/2020',
    description: `Das Studium an der HDA habe ich angebrochen. Auslöser dafür war die Corona-Pandemie und die damit
                   einhergehenden Schulschließungen.
                   Dies ermöglichte es mir jedoch, mich konkret auf Front End Development zu konzentrieren.`
  },
  {
    company: 'Ferien/ Selbststudium',
    position: 'Studierende',
    specialization: 'Front End Web',
    date: '07/2019 - 10/2019',
    description: `Nach einem Urlaub in meiner Heimat habe ich begonnen, die ersten Bücher zum Thema HTML5 und CSS3
                   zu lesen und meine ersten statischen Webseiten erstellt, bis zum Beginn meines Studiums an der Hochschule Darmstadt.`
  },
  {
    company: 'Wilhelm-Merton-Schule | Bereich Fachschule für Betriebswirtschaft',
    position: 'Studierende',
    specialization: 'Betriebswirtschaftslehere',
    date: '08/2017 - 06/2019',
    description: `Da ich ursprünglich Wirtschaftsinformatik studieren wollte, ich jedoch kein Abitur hatte, hatte ich mir überlegt,
                   den staatl. geprüften Betriebswirten zu absolvieren und zeitgleich mein Fachabitur zu erwerben, um an einer Hochschule
                   studieren zu können. Da ich nun bereits einen Abschluss in Bereich Betriebswirtschaft hatte, habe ich mich an der
                   Hochschule für Informatik entschieden.`
  },
  {
    company: 'Verschiedene',
    position: 'Verschiedenes',
    specialization: '',
    date: '2007 - 08/2017',
    description: `Ich habe die allgemein bildende Schule mit der mittleren Reife verlassen.
                  Meine Ausbildung zur Kauffrau im Einzelhandel habe ich erfolgreich abgeschlossen.
                  Gearbeitet habe ich dann als Verkäuferin, Kauffrau, Kundenbetreuerin, Aushilfe und habe auch einmal ein Praktikum in
                  einem Personalbüro gemacht.
                  Zudem war ich in der Datenerfassung tätig.
                  All diese Tätigkeiten haben mich jedoch nicht glücklich gemacht.
                  Deshalb habe ich entschieden, mich weiter zu bilden, mein Abitur nachzuholen und in eine Tätigkeit zu investieren,
                  die Zukunft hat und anspruchsvoll ist.
                  So richtig wohl fühle ich mich erst seit ich begonnen habe, meine ersten Webseiten zu erstellen.`
  }
];

export const faq: QAPair[] = [
  {
    question: 'Was sind meine Stärken?',
    answer: `Ich sehe meine Stärken darin, dass ich sorgfältig und pflichtbewusst bin. Ich arbeite strukturiert, lösungsorientiert und bin
             detailverliebt. Durch meine Ausbildung agiere ich kundenorientiert. Außerdem lege ich viel Wert auf Pünktlichkeit,
             weshalb ich immer darauf bedacht bin, alle Termine fristgerecht einzuhalten.
             Zudem bin ich jederzeit bereit, etwas Neues zu lernen -  was Disziplin und Ausdauer erfordert.`
  },
  {
    question: 'Was sind meine Schwächen?',
    answer: `Meine größte Schwäche ist, dass es mir noch an Expertise in der Softwareentwicklung mangelt, doch ich hoffe, dass ich nun auch praktische Erfahrungen in
             einem Unternehmen sammeln kann.
             Des Weiteren rückversichere ich mich öfter, als es vielleicht manch anderer tun würde, wenn ich meine Komfortzone verlasse, um Fehler zu vermeiden.
             Eine weitere Schwäche von mir ist, dass ist nur schwer Nein sagen kann und anderen selten einen Gefallen abschlage.
             `
  },
  {
    question: 'Warum sollten Sie mich einstellen?',
    answer: `Ich wäre eine Bereicherung für ihr Team, weil ich empathisch, ordnungsliebend und harmoniebedürftig bin und fungiere auch gern als Schlichter,
             wenn es Diskussionen oder Auseinandersetzungen gibt, die nicht zielführend sind.
             Außerdem zeichne ich mich durch Engagement und Motivation aus.
             Ich suche eine Anstellung, in der ich das bisher Gelernte anwenden und ausbauen kann und möchte, wenn möglich einige Jahre als
             Mitarbeiterin für Sie tätig sein.`
  },
  {
    question: 'Warum möchte ich als Front End Developer arbeiten?',
    answer: `Wie Sie meinem Werdegang vielleicht schon entnommen haben, habe ich in meinem bisherigen Leben schon das ein oder andere probiert.
             Glücklich wurde ich nicht. Seit ich aber angefangen habe Webseiten zu erstellen, ist dies zu einem Hobby geworden und ich verbringe den
             Großteil meiner Freizeit am Laptop und erstelle immer neue Projekte, um mich zu verbessern und Neues auszuprobieren.
             Eine Anstellung in diesem Bereich würde für mich also bedeuten, mein Hobby zum Beruf zu machen.`
  },
  {
    question: 'Wie gehe ich mit Stress um?',
    answer: `In stressigen Situationen strukturiere ich die anstehenden Aufgaben und versuche diese zu priorisieren.
             Dann beginne ich bei der Wichtigsten und zerteile diese in kleinere Stücke, um diese nach und nach zu bearbeiten,
             bis alles erledigt ist.`
  },
  {
    question: 'Wie reagiere ich auf Kritik?',
    answer: `Konstruktive Kritik ist enorm wichtig und ich bin immer dankbar, solche zu erhalten. Ich bemühe mich dann, diese möglichst sofort
             umsetzen, denn nur wenn man seine Fehler eingesteht, kann man daran wachsen.`
  },
];

export const forbiddenQuestions: QAPair[] = [
  {
    question: 'Bin ich schwanger? ',
    answer: 'Nein, definitv nicht.',
  },
  {
    question: 'Wie sieht meine Familienplanung aus?',
    answer: `Mein Mann und ich wünschen uns keine Kinder. Natürlich kam diese Frage schon einmal auf, geändert haben wir unsere Meinung nicht
             und ich bin mir sicher, dass es dabei bleiben wird.`
  },
  {
    question: 'Habe ich Vorstrafen?',
    answer: `Nein, wenn Sie Interesse daran haben, werde ich mir auch gern ein polizeiliches Führungszeugnis besorgen und
             Ihnen dies vorlegen - bei Bedarf auch ein erweitertes.`
  },
  {
    question: 'Gehöre ich einer Religion an?',
    answer: 'Ich gehöre keiner Religion an. Überhaupt bin ich nicht religiös, akzeptiere aber alle Glaubensrichtungen.'
  },
  {
    question: 'Gehöre ich einer Gewerkschaft an?',
    answer: 'Einer Gewerkschaft gehöre ich nicht an - tat dies auch noch nie und habe es zukünftig auch nicht vor.'
  },
  {
    question: 'Leide ich an einer chronischen Krankheit oder werde ich oft krank?',
    answer: `Ich bin einer der glücklichen Menschen, die von sich behaupten können, dass sie nur selten krank werden.
             An einer chronischen Krankheit leide ich zum Glück auch nicht.`
  },
];

