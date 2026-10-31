import { STATS, type Block } from "@/data/portfolio";

/**
 * Swahili translations of the portfolio content, keyed by slug / number / index.
 * English lives in portfolio.ts. Anything missing here falls back to English.
 * NOTE: please have a native speaker proof-read before launch.
 */

export const SW_PROJECTS: Record<string, { tag: string; summary: string; problem: string; solution: string[] }> = {
  "kitu-analytics": {
    tag: "Uhasibu wa Biashara Ndogo & Uchambuzi wa Mikopo",
    summary: "Jukwaa la uhasibu na uchambuzi kwa biashara ndogo linalogeuza kumbukumbu za kila siku kuwa maarifa wazi — ikiwemo kupima ustahiki wa mkopo — lipo katika hatua ya MVP.",
    problem: "Biashara ndogo huweka kumbukumbu kwenye madaftari na jumbe za simu, hivyo ni vigumu kuona zinavyoendelea au kuthibitisha kwa mkopeshaji.",
    solution: [
      "Uhasibu rahisi uliotengenezwa kwa biashara ndogo",
      "Uchambuzi unaogeuza kumbukumbu kuwa maarifa kwa lugha rahisi",
      "Huduma ya kupima mkopo kwa kutumia miamala ya biashara yenyewe",
      "Imewekwa kwenye Docker ili kila sehemu ifanye kazi vivyo hivyo kila mahali",
    ],
  },
  cpage: {
    tag: "Kitengeneza Ukurasa wa Jalada la Kazi za Chuo",
    summary: `Zana ya wanafunzi inayotumika zaidi Tanzania — watumiaji ${STATS.users} wanaotengeneza kurasa za jalada kwa vyuo ${STATS.universities}.`,
    problem: "Kila mwanafunzi wa Tanzania hupoteza dakika 30 kupanga ukurasa wa jalada kwa kila kazi. Kazi za vikundi huwa mzigo wa usiku wa manane.",
    solution: [
      `Violezo vya vyuo ${STATS.universities} vya Tanzania`,
      "Hali ya mtu mmoja na ya kikundi yenye usimamizi mahiri wa timu",
      "Hutengeneza faili za .docx zinazoharirika",
      "Ujazaji wa kiotomatiki wa taarifa zinazojirudia",
      "Bure kabisa bila kuhitaji kufungua akaunti",
    ],
  },
  "safari-tours": {
    tag: "Jukwaa la Safari za Utalii",
    summary: "Jukwaa la kuonyesha vivutio vya safari za Afrika, kusimamia shughuli za utalii na kupanga safari.",
    problem: "Kampuni za utalii zinahitaji njia nzuri ya kuonyesha vivutio na njia rahisi ya kugeuza hamu ya mteja kuwa safari iliyolipiwa.",
    solution: [
      "Kurasa zilizoratibiwa za vivutio na safari",
      "Uzoefu wa kupanga safari kwa wasafiri",
      "Sehemu ya mbele ya haraka na inayofaa kila kifaa, iliyowekwa Vercel",
    ],
  },
  "swahili-sms-filter": {
    tag: "Android · Kujifunza kwa Mashine",
    summary: "Programu ya Android inayotumia kujifunza kwa mashine kuchuja SMS za taka kwa wakati halisi kwa wazungumzaji wa Kiswahili.",
    problem: "Vichujio vingi vya taka vimetengenezwa kwa Kiingereza, hivyo jumbe za utapeli na matangazo ya Kiswahili hupita.",
    solution: [
      "Kugundua taka kwenye simu kwa jumbe za Kiswahili",
      "Kuchuja kwa wakati halisi jumbe zinapoingia",
      "Imetengenezwa kama programu asilia ya Android",
    ],
  },
  "travel-management": {
    tag: "Safari za Kibiashara & Matumizi",
    summary: "Programu ya Laravel na MySQL ya kuhifadhi safari za kibiashara, kufuatilia matumizi na kusimamia sera za safari.",
    problem: "Maombi ya safari za kibiashara, idhini na matumizi hutawanyika kwenye barua pepe na lahajedwali.",
    solution: [
      "Mtiririko wa kuhifadhi safari",
      "Ufuatiliaji wa matumizi kwa kila safari",
      "Usimamizi na ukaguzi wa sera",
      "Sehemu ya nyuma inayoanzia kwenye API",
    ],
  },
  "ipf-meals": {
    tag: "Mfumo wa Kuchagua Chakula",
    summary: "Mfumo wa ndani wa kuchagua chakula na kukumbusha kwa iPF Softwares, unaoendeshwa na bot ya Telegram na dashibodi ya msimamizi.",
    problem: "Timu ilikuwa ikipoteza kumbukumbu za chaguo la chakula kila siku, na msimamizi alikuwa akifuatilia watu kwenye WhatsApp kila saa ya chakula cha mchana.",
    solution: [
      "Bot ya Telegram inayomkumbusha kila mhandisi kuchagua chakula",
      "Dashibodi ya msimamizi kusimamia menyu, oda na wauzaji",
      "Ripoti za kila siku zinazotumwa kwa timu ya uendeshaji",
      "Akaunti zenye majukumu kwa wasimamizi, wauzaji na wafanyakazi",
    ],
  },
  "usalama-barabarani": {
    tag: "Android · Elimu ya Udereva",
    summary: "Programu ya Android ya kujifunza kuendesha gari, kwa wanaoanza na wenye uzoefu.",
    problem: "Wanafunzi wanahitaji njia rahisi ya kusoma sheria za barabarani na kujizoeza kabla ya mtihani.",
    solution: ["Maudhui ya kujifunza udereva kwenye simu yako", "Imetengenezwa kwa wanaoanza na wanaojikumbusha", "Programu asilia ya Android"],
  },
  "it-diagnosis-table": {
    tag: "Zana ya Marejeo ya Msaada wa IT",
    summary: "Zana shirikishi ya marejeo kwa wafanyakazi wa msaada wa IT kutafuta matatizo ya kawaida na suluhisho zake.",
    problem: "Wafanyakazi wa msaada hupoteza muda kutatua matatizo yale yale ya kila siku.",
    solution: ["Jedwali linalotafutika la matatizo ya kawaida", "Suluhisho za haraka hatua kwa hatua", "Nyepesi na ya haraka"],
  },
  "cosmetics-ecommerce": {
    tag: "Duka la Mtandaoni · Laravel",
    summary: "Mradi wa duka la mtandaoni la vipodozi na urembo uliotengenezwa kwa Laravel.",
    problem: "Chapa za urembo zinahitaji duka la mtandaoni linalovinjari na kusimamiwa kwa urahisi.",
    solution: ["Katalogi ya bidhaa na duka", "Kikapu na mtiririko wa oda", "Sehemu ya nyuma ya Laravel"],
  },
  "ecommerce-flutter": {
    tag: "Programu ya Simu ya Ununuzi",
    summary: "Programu ya ununuzi iliyotengenezwa kwa Flutter kwa uzoefu laini wa kununua kwenye simu.",
    problem: "Wanunuzi wanatarajia programu ya haraka inayohisi ya asili badala ya tovuti ya simu ya polepole.",
    solution: ["Duka la simu linalofanya kazi kwenye majukwaa mengi", "Kuvinjari na kulipa kwa urahisi", "Msimbo mmoja wa Flutter"],
  },
  "wifi-billing": {
    tag: "Malipo ya Hotspot ya MikroTik & Vocha",
    summary: "Jukwaa la malipo ya hotspot kwa watoa huduma za intaneti wanaotumia ruta za MikroTik — vocha, mipango na ripoti za mapato.",
    problem: "Watoa huduma wadogo walikuwa wakihangaika na MikroTik CLI, lahajedwali na vocha zilizochapishwa kutoza wateja wa hotspot.",
    solution: ["Utengenezaji wa vocha na makundi ya kuchapisha", "Muunganiko wa MikroTik RADIUS", "Dashibodi za mapato na matumizi", "Hotspot nyingi kwa pamoja"],
  },
  maconet: {
    tag: "Jukwaa la Masoko & Uwekezaji wa Kilimobiashara",
    summary: "Tovuti ya masoko na lango la wawekezaji kwa mfuko wa kilimobiashara wa Tanzania.",
    problem: "Maconet ilihitaji uwepo wa mtandaoni unaoaminika kuvutia wawekezaji wa nje na kushiriki maendeleo ya mashamba.",
    solution: ["Kurasa za masoko zinazolenga wawekezaji", "Sehemu ya habari na masasisho", "Mtiririko wa mawasiliano na maswali ya uwekezaji", "Muundo unaoanza na simu"],
  },
  trinity: {
    tag: "POS ya Kuku",
    summary: "Mfumo wa mauzo na hesabu ya bidhaa uliotengenezwa kwa mtandao wa biashara ya kuku Tanzania.",
    problem: "Biashara ilikuwa ikifuatilia mauzo, akiba ya chakula na idadi ya kuku kwa mchanganyiko wa madaftari na jumbe za WhatsApp.",
    solution: ["POS ya haraka yenye barcode na vitufe vya haraka", "Ufuatiliaji wa akiba ya chakula na bidhaa", "Ripoti za mapato za kila siku/wiki", "Akaunti za wafanyakazi zenye majukumu"],
  },
  "exchange-safaris": {
    tag: "Tovuti ya Safari & Huduma za Usafirishaji",
    summary: "Tovuti na mtiririko wa uhifadhi kwa kampuni ya safari na usafirishaji ya Tanzania.",
    problem: "Uhifadhi ulifanyika kwa simu pekee — hakukuwa na katalogi mtandaoni, kukusanya wateja watarajiwa wala kushiriki vifurushi vya safari.",
    solution: ["Katalogi ya vifurushi vya safari yenye picha nzuri", "Fomu za uhifadhi / ombi la bei", "Kurasa za huduma za usafirishaji", "Kurasa za njia zilizolenga SEO"],
  },
};

export const SW_SERVICES: Record<string, { title: string; short: string; long: string; deliverables: string[] }> = {
  "custom-websites": {
    title: "Tovuti Maalum za Biashara",
    short: "Tovuti za haraka zinazofaa simu kwa biashara za Tanzania — kurasa za kutua, kurasa za huduma na mtiririko wa mawasiliano unaobadilisha wageni kuwa wateja.",
    long: "Natengeneza tovuti za biashara zinazozingatia kasi, SEO na kubadilisha wageni kuwa wateja. Kila ukurasa umejengwa kuwa rahisi kusasisha na rahisi kwa injini za utafutaji kuusoma.",
    deliverables: ["Muundo unaofaa kila kifaa", "Misingi ya SEO", "CMS au maudhui yanayoharirika", "Fomu za mawasiliano na kukusanya wateja", "Usanidi wa takwimu"],
  },
  "nextjs-react": {
    title: "Programu za Wavuti za Next.js & React",
    short: "Programu za wavuti zinazofaa kila kifaa kwa React, Next.js na TypeScript — dashibodi, bidhaa za SaaS, malango ya wateja na zana za ndani.",
    long: "Natengeneza programu za React na Next.js za uzalishaji kwa timu zinazohitaji dashibodi, bidhaa za SaaS, malango na zana za ndani za biashara.",
    deliverables: ["Msimbo wa React + Next.js wenye aina", "Uthibitishaji na ufikiaji kulingana na majukumu", "Dashibodi na ripoti", "Mfumo wa kuweka mtandaoni", "Nyaraka za makabidhiano"],
  },
  "node-apis": {
    title: "API za Node.js & Sehemu za Nyuma",
    short: "API za Node.js zinazotegemewa, hifadhidata za SQL, uthibitishaji, ruhusa, miunganisho na mtiririko wa ripoti.",
    long: "Nyuma ya kila programu muhimu kuna sehemu ya nyuma inayotegemewa. Natengeneza REST API, miundo ya hifadhidata, mifumo ya uthibitishaji na miunganisho inayodumu bidhaa inapokua.",
    deliverables: ["Muundo wa REST API", "Muundo wa hifadhidata", "Uthibitishaji, majukumu na ruhusa", "Miunganisho ya huduma za nje", "Ufuatiliaji na kumbukumbu"],
  },
  "planning-consulting": {
    title: "Mipango ya Kiufundi & Ushauri",
    short: "Chagua mpango sahihi wa kiufundi, bainisha wigo halisi na epuka kujenga kupita kiasi kabla ya kuanza kuendeleza.",
    long: "Nawasaidia waanzilishi na wamiliki wa biashara kuchagua teknolojia sahihi, kupanga MVP halisi na kupitia muundo kabla ya kutumia pesa kwenye uendelezaji.",
    deliverables: ["Waraka wa wigo wa kiufundi", "Mapendekezo ya teknolojia na watoa huduma", "Mpango wa hatua", "Makadirio ya gharama na muda"],
  },
  maintenance: {
    title: "Matengenezo ya Tovuti Tanzania",
    short: "Kuweka tovuti na programu mtandaoni, kuzisasisha, kufuatilia uaminifu, kurekebisha hitilafu, kuboresha kasi na kusaidia mabadiliko baada ya uzinduzi.",
    long: "Msaada wa kiufundi unaoendelea ili tovuti yako iwe ya haraka, salama na ifanye kazi — kurekebisha hitilafu, kusasisha maudhui, nakala rudufu na ufuatiliaji wa upatikanaji.",
    deliverables: ["Kurekebisha hitilafu", "Kusasisha maudhui", "Nakala rudufu", "Ufuatiliaji wa upatikanaji", "Ripoti ya kila mwezi"],
  },
  "seo-performance": {
    title: "SEO & Kasi",
    short: "Kuboresha kasi ya kurasa, metadata, vichwa vya habari, data iliyopangwa, ramani ya tovuti na misingi ya SEO ya kiufundi.",
    long: "Kasi na uwezo wa kusomwa na injini za utafutaji ni muhimu. Nakagua na kuboresha Core Web Vitals, misingi ya SEO na data iliyopangwa ya tovuti yako.",
    deliverables: ["Ukaguzi wa Lighthouse", "Marekebisho ya SEO ya ukurasa", "Data iliyopangwa", "Ramani ya tovuti & robots", "Ripoti ya kila mwezi ya kasi"],
  },
  "api-integration": {
    title: "Muunganiko wa API",
    short: "Kupanga na kujenga miunganisho inayotegemewa kwa malipo, ujumbe, huduma za data na mtiririko wa ndani.",
    long: "Unganisha huduma za nje — malipo, pesa za simu, ujumbe, CRM — kwenye bidhaa yako kwa kushughulikia makosa vizuri na ufuatiliaji.",
    deliverables: ["Muundo wa muunganiko", "Usanidi wa majaribio + uzalishaji", "Webhooks & majaribio upya", "Ufuatiliaji wa makosa"],
  },
  debugging: {
    title: "Kutatua Hitilafu",
    short: "Kuchunguza chanzo, kueleza athari na kurekebisha tatizo — bila kulibadilisha kuwa kujenga upya.",
    long: "Una tatizo kwenye programu yako ya sasa? Nagundua chanzo, napendekeza suluhisho dogo na salama zaidi, kisha nalitekeleza.",
    deliverables: ["Ripoti ya chanzo", "Marekebisho yaliyolengwa", "Jaribio la kuzuia kurudi", "Mapendekezo ya kufuatilia"],
  },
};

export const SW_TIERS: Record<string, { time: string; title: string; desc: string; best: string; features: string[]; tzsNote?: string }> = {
  "1": { time: "Siku 3–7", title: "Ukurasa wa Kutua wa Kuanzia", desc: "Ukurasa rahisi wenye maudhui yasiyobadilika kwa biashara ndogo zinazohitaji uwepo safi mtandaoni.", best: "Biashara ndogo zinazohitaji ukurasa rahisi", features: ["Tovuti ya ukurasa mmoja", "Muundo unaofaa kila kifaa", "Sehemu ya taarifa za biashara", "Sehemu ya mawasiliano", "Usanidi wa msingi wa SEO"] },
  "2": { time: "Wiki 1–2", title: "Tovuti ya Biashara Inayosimamiwa", desc: "Tovuti ndogo ya biashara yenye sehemu ya msimamizi ya kusasisha maudhui kama huduma, blogu au bidhaa.", best: "Biashara zinazotaka kusasisha bila kumpigia msanidi", features: ["Tovuti inayofaa kila kifaa", "Dashibodi ya msimamizi", "Maudhui yanayoharirika", "Sehemu ya blogu au bidhaa", "Sehemu ya mawasiliano"] },
  "3": { time: "Wiki 3–5", title: "Mfumo Maalum wa Biashara", desc: "Mfumo wa uendeshaji wa wavuti uliojengwa kulingana na jinsi biashara yako inavyofanya kazi — POS, hesabu ya bidhaa, uhifadhi, kumbukumbu na CRM.", best: "Biashara zinazohitaji POS, hesabu ya bidhaa, uhifadhi au CRM", features: ["Dashibodi ya msimamizi", "Akaunti za watumiaji", "Mfumo wa hifadhidata", "Sehemu ya ripoti", "Zana za mtiririko wa biashara"] },
  "4": { time: "Wiki 5–8", title: "Tovuti ya Biashara ya Mtandaoni", desc: "Duka kamili la mtandaoni la kuuza bidhaa au huduma lenye malipo na usimamizi wa oda.", best: "Biashara zinazouza bidhaa au huduma mtandaoni", features: ["Katalogi ya bidhaa", "Kikapu cha ununuzi", "Usimamizi wa oda", "Malipo ya pesa za simu", "Dashibodi ya msimamizi"] },
  "5": { time: "Wiki 8–12+", title: "Programu Maalum ya Wavuti", desc: "Jukwaa lililojengwa kikamilifu kulingana na mtiririko wako — bidhaa za SaaS, MVP, malango na mifumo changamano ya ndani.", best: "Kampuni changa zinazohitaji jukwaa maalum, SaaS au MVP", features: ["Muundo maalum", "Vipengele vya hali ya juu", "Sehemu ya nyuma inayokua", "Ufikiaji kulingana na majukumu", "Ushauri & mipango"] },
  "6": { time: "Miezi 1–3", title: "Huduma za SEO", desc: "Uboreshaji kwa injini za utafutaji ili kuongeza mwonekano wa tovuti na kuvutia wageni wa asili.", best: "Biashara zinazotaka kupanda kwenye Google", features: ["Uboreshaji wa maneno muhimu", "SEO ya ukurasa", "Ufuatiliaji wa kasi", "Ripoti za SEO"] },
  "7": { time: "Kila mwezi", title: "Matengenezo ya Tovuti", desc: "Msaada endelevu wa kuweka tovuti yako salama, iliyosasishwa na inayofanya kazi — kurekebisha hitilafu, nakala rudufu na ufuatiliaji wa upatikanaji.", best: "Wamiliki wa tovuti wanaotaka amani ya akili", features: ["Kurekebisha hitilafu", "Kusasisha maudhui", "Nakala rudufu", "Ufuatiliaji wa upatikanaji"] },
};

export const SW_PROCESS = [
  { title: "Kupanga mazungumzo", desc: "Tutajadili malengo na maono yako — bila dhana, bila maneno matupu." },
  { title: "Muundo maalum", desc: "Nitatengeneza muundo maalum unaofaa mahitaji na hadhira yako." },
  { title: "Uendelezaji", desc: "Muundo unakuwa hai kwa msimbo safi, wenye ufanisi na uliojaribiwa vizuri." },
  { title: "Uzinduzi", desc: "Nitakusaidia kuweka tovuti yako mtandaoni, ifuatiliwe na iwe tayari kwa dunia." },
];

export const SW_FAQS = [
  { q: "Unachukua miradi ya aina gani?", a: "Programu za wavuti za uzalishaji, mifumo ya biashara (POS, hesabu ya bidhaa, CRM), majukwaa ya biashara ya mtandaoni na SaaS maalum. Kama inaishi kwenye wavuti na inahitaji kukua, naweza kuijenga." },
  { q: "Uko wapi na unafanya kazi na nani?", a: "Nipo Tanzania na nafanya kazi kwa mbali na wateja Afrika, Ulaya na Amerika Kaskazini. Mawasiliano ya mtandaoni kwanza, maonyesho ya kila wiki." },
  { q: "Malipo yanafanyikaje?", a: "Miradi mingi ni asilimia 50 mwanzoni na asilimia 50 wakati wa uzinduzi. Kwa miradi mirefu, tunagawa kwa hatua. Napokea uhamisho wa benki, pesa za simu (Tanzania) na Wise." },
  { q: "Je, mnatoa msaada baada ya uzinduzi?", a: "Ndiyo. Kila mradi unajumuisha siku 30 za msaada bila malipo baada ya uzinduzi. Baadaye, mipango ya hiari ya kila mwezi inashughulikia hosting, masasisho na maboresho." },
  { q: "Je, unaweza kuchukua mradi uliopo?", a: "Ndiyo. Nafanya ukaguzi wa msimbo, kuboresha msimbo na kuokoa miradi kutoka kwa wasanidi waliopita. Nitakutumia tathmini ya maandishi kabla ya kutoa bei." },
  { q: "Nitaanzaje?", a: "Tumia fomu ya ombi la mradi, au nitumie ujumbe moja kwa moja kwenye WhatsApp, barua pepe au simu. Tutapanga mazungumzo ya dakika 30, kisha nitakutumia pendekezo la maandishi ndani ya saa 48." },
];

export const SW_SKILL_AREAS: Record<string, string> = {
  Frontend: "Sehemu ya Mbele",
  Backend: "Sehemu ya Nyuma",
  Database: "Hifadhidata",
  Deployment: "Uwekaji Mtandaoni",
  Collaboration: "Ushirikiano",
  "AI-Assisted Dev": "Uendelezaji kwa Msaada wa AI",
};

export const SW_INSIGHTS: Record<string, { category: string; title: string; excerpt: string; body?: Block[] }> = {
  "how-much-does-a-website-cost-in-tanzania": {
    category: "Bei",
    title: "Gharama ya Kutengeneza Tovuti Tanzania: Bei Halisi, Mifano na Mchanganuo wa Kazi",
    excerpt: "Gharama ya tovuti inategemea tovuti hiyo inapaswa kufanya nini kwa biashara. Ukurasa rahisi wa kutua unaweza kuanzia takriban $480, wakati tovuti zinazosimamiwa, maduka ya mtandaoni na mifumo maalum ni kati ya $1,500 hadi $35,800 kulingana na ukubwa wa kazi.",
    body: [
      { t: "p", text: "Jibu la kweli kwa swali “tovuti inagharimu kiasi gani Tanzania?” ni: inategemea kabisa tovuti hiyo inapaswa kufanya nini kwa biashara yako. Tovuti ya ukurasa mmoja inayoitambulisha kampuni yako ni kazi tofauti kabisa na dashibodi inayoendesha shughuli zako za kila siku — na bei inafuata kazi, si neno “tovuti”." },
      { t: "p", text: "Hapa chini ni viwango ninavyotoa kwa kawaida, kinachojumuishwa kwenye kila kimoja, na jinsi ya kujua unahitaji kipi. Bei ziko kwa USD pamoja na makadirio ya TZS, na kila mradi hupangwa kwa maandishi kabla ya pesa yoyote kubadilishana mikono." },
      { t: "h2", text: "Viwango vya bei kwa muhtasari" },
      { t: "ul", items: [
        "Ukurasa wa Kutua wa Kuanzia — $480 – $690 (takriban TZS 1.2M – 1.7M), hukamilika siku 3–7",
        "Tovuti ya Biashara Inayosimamiwa — $1,500 – $2,350 (TZS 3.7M – 5.8M), wiki 1–2",
        "Mfumo Maalum wa Biashara (POS, hesabu ya bidhaa, CRM) — $7,300 – $12,100 (TZS 18M – 30M), wiki 3–5",
        "Tovuti ya Biashara ya Mtandaoni — $4,700 – $8,150 (TZS 11.7M – 20M), wiki 5–8",
        "Programu Maalum ya Wavuti / SaaS — $18,000 – $35,800 (TZS 45M – 90M), wiki 8–12+",
        "Huduma za SEO — $430 – $1,050, ndani ya miezi 1–3",
        "Matengenezo ya Tovuti — $110 – $240 kwa mwezi",
      ] },
      { t: "h2", text: "Ukurasa wa kutua wa kuanzia: $480 – $690" },
      { t: "p", text: "Ukurasa mmoja uliobuniwa vizuri unaofaa simu, wenye huduma zako, mawasiliano na SEO ya msingi. Ni chaguo sahihi kwa biashara mpya inayohitaji kuonekana ya kuaminika mtandaoni wiki hii. Maudhui hayabadiliki: kitu kikibadilika, unaniomba nikisasishe." },
      { t: "h2", text: "Tovuti ya biashara inayosimamiwa: $1,500 – $2,350" },
      { t: "p", text: "Tofauti ya bei inakupa uhuru. Unapata dashibodi ya msimamizi ili usasishe huduma, uchapishe makala au usasishe bidhaa bila kumpigia msanidi. Ukitarajia kubadilisha tovuti yako zaidi ya mara chache kwa mwaka, kiwango hiki mara nyingi hujilipia chenyewe." },
      { t: "h2", text: "Mifumo maalum ya biashara: $7,300 – $12,100" },
      { t: "p", text: "POS, zana ya hesabu ya bidhaa, mfumo wa uhifadhi au CRM si tovuti — inachukua nafasi ya kazi halisi ya uendeshaji. Unalipia akaunti za wafanyakazi na ruhusa, hifadhidata inayoakisi jinsi biashara yako inavyoendeshwa, ripoti unazoweza kuziamini, na kanuni za mtiririko. Ndiyo maana inagharimu mara kadhaa zaidi ya tovuti ya kawaida, na ndiyo maana inaweza kukuokolea zaidi ya inavyogharimu." },
      { t: "h2", text: "Biashara ya mtandaoni na programu maalum za wavuti" },
      { t: "p", text: "Maduka ya mtandaoni ($4,700 – $8,150) yanaongeza katalogi ya bidhaa, kikapu, usimamizi wa oda na malipo ya pesa za simu. Majukwaa kamili maalum ($18,000 na zaidi) ni bidhaa za mtindo wa SaaS zenye muundo maalum, ufikiaji kulingana na majukumu na sehemu ya nyuma inayokua. Zote zinahitaji hatua ya mipango kwanza — ni sehemu ya bei nafuu zaidi ya mradi na inazuia makosa ghali zaidi." },
      { t: "callout", title: "Nini hupandisha au kushusha bei", text: "Idadi ya majukumu ya watumiaji, miunganisho (malipo, SMS, WhatsApp, uhasibu), kiasi cha ripoti maalum, na maudhui au data inayopaswa kuhamishwa. Urembo wa muundo ni muhimu kidogo kuliko utendaji." },
      { t: "h2", text: "Jinsi ya kuchagua bila kutumia kupita kiasi" },
      { t: "ul", items: [
        "Andika mambo matatu ambayo tovuti lazima ikufanyie. Kama ni “kuonyesha taarifa”, anza na ukurasa wa kutua.",
        "Kama utasasisha maudhui kila wiki, panga bajeti ya tovuti inayosimamiwa.",
        "Kama wafanyakazi wataingia na kumbukumbu zinapaswa kufuatiliwa, unahitaji mfumo, si tovuti.",
        "Kama huna uhakika, lipia kikao kifupi cha mipango ya kiufundi kwanza — mara nyingi huondoa maelfu ya dola za kujenga kupita kiasi.",
      ] },
      { t: "quote", text: "Swali sahihi si “nawezaje kupata kwa bei ya chini zaidi?” — ni “mfumo huu utanifanyia nini kila siku kwa miaka mitatu ijayo?”" },
      { t: "p", text: "Kama unataka bei kamili ya wazo lako, nitumie maelezo mafupi nami nitajibu ndani ya saa 24 nikiwa na wigo, muda na bei." },
    ],
  },
  "nextjs-vs-wordpress-tanzania": {
    category: "Teknolojia",
    title: "Next.js dhidi ya WordPress kwa Biashara za Tanzania",
    excerpt: "WordPress mara nyingi ni chaguo zuri kwa tovuti zenye maudhui mengi zinazohitaji kuhariri kwa urahisi. Next.js kwa kawaida ni bora biashara inapohitaji kasi, mtiririko maalum, kurasa zinazolenga SEO, dashibodi, malango au nafasi ya kukua kuwa programu kamili.",
  },
  "what-cpage-taught-me-about-building-products": {
    category: "Mfano wa Kazi",
    title: `Wanafunzi ${STATS.users.replace("+", "")} Walivyonifundisha Kutengeneza Bidhaa Inayotumiwa Kweli`,
    excerpt: `cPage ilianza kama kero binafsi na kukua hadi watumiaji hai ${STATS.users} kwenye vyuo ${STATS.universities} bila bajeti ya matangazo. Haya ndiyo mafunzo ya bidhaa ninayoyatumia kwenye kila mradi wa mteja.`,
  },
  "spreadsheet-vs-custom-business-system": {
    category: "Mifumo ya Biashara",
    title: "Lahajedwali, Madaftari au Mfumo Maalum? Jinsi ya Kujua Wakati wa Kubadilisha",
    excerpt: "Biashara nyingi za Tanzania huendeshwa kwa madaftari, lahajedwali na jumbe za WhatsApp. Hilo hufanya kazi hadi pale halifanyi tena. Hizi ni dalili kuwa ni wakati wa POS, hesabu ya bidhaa au mfumo wa uhifadhi — na nini cha kutarajia unapoutengeneza.",
  },
};
