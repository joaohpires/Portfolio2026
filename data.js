// Edit your content here. Every text has an English (en) and Portuguese (pt) version.
const OWNER = "João Pires";
const EMAIL = "hello@example.com";
const UI = {
  about:{en:"About",pt:"Sobre"}, works:{en:"works",pt:"trabalhos"}, work:{en:"Work",pt:"Trabalho"},
  hello:{en:"Hello",pt:"Olá"}, contact:{en:"Contact",pt:"Contacto"},
  aboutTitle:{en:"About & Contact",pt:"Sobre e Contacto"}, portfolio:{en:"Portfolio",pt:"Portefólio"},
  bio:{en:`I'm ${OWNER}, a multidisciplinary creative working across design, writing and photography. I care about clear ideas, strong contrast and work that doesn't shout more than it needs to.`,
       pt:`Sou o ${OWNER}, um criativo multidisciplinar que trabalha em design, escrita e fotografia. Valorizo ideias claras, contraste forte e trabalho que não grita mais do que precisa.`},
  available:{en:"Available for freelance projects, commissions and collaborations.",pt:"Disponível para projetos freelance, encomendas e colaborações."}
};
const AREAS = [
  {slug:"design",name:{en:"Design",pt:"Design"},intro:{en:"Identity, posters and interfaces built on clear structure and bold type.",pt:"Identidade, cartazes e interfaces com estrutura clara e tipografia forte."},items:[
    {title:"Rede Poster Series",year:"2026",text:{en:"Swiss-inspired poster system for a music festival.",pt:"Sistema de cartazes de inspiração suíça para um festival de música."},image:"images/design-1.jpg"},
    {title:"Norte Identity",year:"2025",text:{en:"Brand identity for an independent coffee roaster.",pt:"Identidade de marca para uma torrefação de café independente."}},
    {title:"Fieldnote App",year:"2024",text:{en:"Interface design for a minimal note-taking app.",pt:"Design de interface para uma app minimalista de notas."}}]},
  {slug:"writing",name:{en:"Writing",pt:"Escrita"},intro:{en:"Essays and short pieces on cities, craft and paying attention.",pt:"Ensaios e textos curtos sobre cidades, ofício e atenção."},items:[
    {title:"On Walking Slowly",year:"2026",text:{en:"An essay about noticing the city at three kilometres an hour.",pt:"Um ensaio sobre observar a cidade a três quilómetros por hora."}},
    {title:"The Grid Is a Promise",year:"2025",text:{en:"Why structure frees rather than limits creative work.",pt:"Porque é que a estrutura liberta, em vez de limitar, o trabalho criativo."}},
    {title:"Notes From the Darkroom",year:"2024",text:{en:"A short piece on patience, chemicals and light.",pt:"Um texto curto sobre paciência, químicos e luz."}}]},
  {slug:"photography",name:{en:"Photography",pt:"Fotografia"},intro:{en:"Black and white street and architecture work, mostly shot on film.",pt:"Fotografia de rua e arquitetura a preto e branco, sobretudo em película."},items:[
    {title:"Long Shadows",year:"2026",text:{en:"Street series, Lisbon.",pt:"Série de rua, Lisboa."},image:"images/photo-1.jpg"},
    {title:"Concrete",year:"2025",text:{en:"Architecture studies.",pt:"Estudos de arquitetura."},image:"images/photo-2.jpg"}]},
  {slug:"other",name:{en:"Other",pt:"Outros"},intro:{en:"Side projects, experiments and collaborations.",pt:"Projetos paralelos, experiências e colaborações."},items:[
    {title:"Zine No. 3",year:"2025",text:{en:"Self-published zine mixing photos and short texts.",pt:"Zine autopublicada que mistura fotos e textos curtos."}},
    {title:"Type Workshop",year:"2024",text:{en:"A weekend workshop on typography basics.",pt:"Um workshop de fim de semana sobre tipografia básica."}}]}
];
