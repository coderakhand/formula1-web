export const COMMON_MEDIA_URL = "https://media.formula1.com/image/upload";
export const COMMON_IMAGE_URL =
  "q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025";

export const getImageUrl = (
  size: number,
  imageRoute: string,
  driverSide?: string
) => {
  if (driverSide) {
    imageRoute = imageRoute.replaceAll("right", "hello_world");
    imageRoute = imageRoute.replaceAll("left", "hello_world");
    imageRoute = imageRoute.replaceAll("front", "hello_world");
    imageRoute = imageRoute.replaceAll("back", "hello_world");
    imageRoute = imageRoute.replaceAll("hello_world", driverSide);
  }

  return `${COMMON_MEDIA_URL}/c_lfill,w_${size}/${COMMON_IMAGE_URL}/${imageRoute}`;
};
export interface driverType {
  team: string;
  firstName: string;
  lastName: string;
  number: number;
  country: string;
  pfpRoute: string;
  npRoute: string;
  country_iso_code?: string;
  points: number[];
}

export const drivers: driverType[] = [
  {
    team: "mclaren",
    firstName: "oscar",
    lastName: "piastri",
    number: 81,
    country: "australia",
    pfpRoute: "mclaren/oscpia01/2025mclarenoscpia01right.webp",
    npRoute: "mclaren/oscpia01/2025mclarenoscpia01numberwhitefrless.webp",
    points: [65, 735, 24, 5, 0],
  },
  {
    team: "mclaren",
    firstName: "lando",
    lastName: "norris",
    number: 4,
    country: "united kingdom",
    pfpRoute: "mclaren/lannor01/2025mclarenlannor01front.webp",
    npRoute: "mclaren/lannor01/2025mclarenlannor01numberwhitefrless.webp",
    country_iso_code: "gb",
    points: [147, 11339, 41, 13, 0],
  },
  {
    team: "red bull racing",
    firstName: "max",
    lastName: "verstappen",
    number: 1,
    country: "netherlands",
    pfpRoute: "redbullracing/maxver01/2025redbullracingmaxver01front.webp",
    npRoute:
      "redbullracing/maxver01/2025redbullracingmaxver01numberwhitefrless.webp",
    country_iso_code: "nl",
    points: [228, 3329, 122, 47, 4],
  },
  {
    team: "red bull racing",
    firstName: "yuki",
    lastName: "tsunoda",
    number: 22,
    country: "japan",
    pfpRoute: "redbullracing/yuktsu01/2025redbullracingyuktsu01right.webp",
    npRoute:
      "redbullracing/yuktsu01/2025redbullracingyuktsu01numberwhitefrless.webp",
    country_iso_code: "jp",
    points: [106, 119, 0, 0, 0],
  },
  {
    team: "mercedes",
    firstName: "kimi",
    lastName: "antonelli",
    number: 12,
    country: "italy",
    pfpRoute: "mercedes/andant01/2025mercedesandant01right.webp",
    npRoute: "mercedes/andant01/2025mercedesandant01numberwhitefrless.webp",
    points: [19, 89, 1, 0, 0],
  },
  {
    team: "mercedes",
    firstName: "george",
    lastName: "russell",
    number: 63,
    country: "united kingdom",
    pfpRoute: "mercedes/georus01/2025mercedesgeorus01right.webp",
    npRoute: "mercedes/georus01/2025mercedesgeorus01numberwhitefrless.webp",
    country_iso_code: "gb",
    points: [147, 966, 23, 7, 0],
  },
  {
    team: "ferrari",
    firstName: "charles",
    lastName: "leclerc",
    number: 16,
    country: "monaco",
    pfpRoute: "ferrari/chalec01/2025ferrarichalec01right.webp",
    npRoute: "ferrari/chalec01/2025ferrarichalec01numberwhitefrless.webp",
    country_iso_code: "mc",
    points: [166, 1622, 49, 27, 0],
  },
  {
    team: "ferrari",
    firstName: "lewis",
    lastName: "hamilton",
    number: 44,
    country: "united kingdom",
    pfpRoute: "ferrari/lewham01/2025ferrarilewham01front.webp",
    npRoute: "ferrari/lewham01/2025ferrarilewham01numberwhitefrless.webp",
    country_iso_code: "gb",
    points: [375, 50004, 202, 104, 7],
  },
  {
    team: "williams",
    firstName: "carlos",
    lastName: "sainz",
    number: 55,
    country: "spain",
    pfpRoute: "williams/carsai01/2025williamscarsai01right.webp",
    npRoute: "williams/carsai01/2025williamscarsai01numberwhitefrless.webp",
    country_iso_code: "es",
    points: [225, 1310, 28, 6, 0],
  },
  {
    team: "williams",
    firstName: "alexander",
    lastName: "albon",
    number: 23,
    country: "thailand",
    pfpRoute: "williams/alealb01/2025williamsalealb01front.webp",
    npRoute: "williams/alealb01/2025williamsalealb01numberwhitefrless.webp",
    points: [123, 313, 2, 0, 0],
  },
  {
    team: "aston martin",
    firstName: "fernando",
    lastName: "alonso",
    number: 14,
    country: "spain",
    pfpRoute: "astonmartin/feralo01/2025astonmartinferalo01right.webp",
    npRoute:
      "astonmartin/feralo01/2025astonmartinferalo01numberwhitefrless.webp",
    country_iso_code: "es",
    points: [422, 2374, 106, 22, 2],
  },
  {
    team: "aston martin",
    firstName: "lance",
    lastName: "stroll",
    number: 18,
    country: "canadian",
    pfpRoute: "astonmartin/lanstr01/2025astonmartinlanstr01right.webp",
    npRoute:
      "astonmartin/lanstr01/2025astonmartinlanstr01numberwhitefrless.webp",
    points: [185, 324, 3, 1, 0],
  },
  {
    team: "racing bulls",
    firstName: "isack",
    lastName: "hajdar",
    number: 6,
    country: "france",
    pfpRoute: "racingbulls/isahad01/2025racingbullsisahad01front.webp",
    npRoute:
      "racingbulls/isahad01/2025racingbullsisahad01numberwhitefrless.webp",
    points: [18, 39, 1, 0, 0],
  },
  {
    team: "racing bulls",
    firstName: "liam",
    lastName: "lawson",
    number: 30,
    country: "new zealand",
    pfpRoute: "racingbulls/lialaw01/2025racingbullslialaw01right.webp",
    npRoute:
      "racingbulls/lialaw01/2025racingbullslialaw01numberwhitefrless.webp",
    country_iso_code: "nz",
    points: [30, 36, 0, 0, 0],
  },
  {
    team: "alpine",
    firstName: "pierre",
    lastName: "gasly",
    number: 10,
    country: "france",
    pfpRoute: "alpine/piegas01/2025alpinepiegas01right.webp",
    npRoute: "alpine/piegas01/2025alpinepiegas01numberwhitefrless.webp",
    points: [172, 456, 5, 0, 0],
  },
  {
    team: "alpine",
    firstName: "franco",
    lastName: "colapinto",
    number: 43,
    country: "argentina",
    pfpRoute: "alpine/fracol01/2025alpinefracol01front.webp",
    npRoute: "alpine/fracol01/2025alpinefracol01numberwhitefrless.webp",
    points: [22, 5, 0, 0, 0],
  },
  {
    team: "kick sauber",
    firstName: "nico",
    lastName: "hulkenberg",
    number: 27,
    country: "germany",
    pfpRoute: "kicksauber/nichul01/2025kicksaubernichul01right.webp",
    npRoute: "kicksauber/nichul01/2025kicksaubernichul01numberwhitefrless.webp",
    country_iso_code: "de",
    points: [246, 612, 1, 1, 0],
  },
  {
    team: "kick sauber",
    firstName: "gabriel",
    lastName: "bortoleto",
    number: 5,
    country: "brazil",
    pfpRoute: "kicksauber/gabbor01/2025kicksaubergabbor01right.webp",
    npRoute: "kicksauber/gabbor01/2025kicksaubergabbor01numberwhitefrless.webp",
    points: [19, 18, 0, 0, 0],
  },
  {
    team: "haas f1 team",
    firstName: "esteban",
    lastName: "ocon",
    number: 31,
    country: "france",
    pfpRoute: "haasf1team/estoco01/2025haasf1teamestoco01right.webp",
    npRoute: "haasf1team/estoco01/2025haasf1teamestoco01numberwhite.webp",
    points: [175, 473, 4, 0, 0],
  },
  {
    team: "haas f1 team",
    firstName: "oliver",
    lastName: "bearman",
    number: 87,
    country: "united kingdom",
    pfpRoute: "haas/olibea01/2025haasolibea01right.webp",
    npRoute: "haasf1team/olibea01/2025haasf1teamolibea01numberwhite.webp",
    country_iso_code: "gb",
    points: [22, 27, 0, 0, 0],
  },
];

export const driverStandings = [
  { rank: 1, country: "Australia", name: "Oscar Piastri", points: 346 },
  { rank: 2, country: "Britain", name: "Lando Norris", points: 332 },
  { rank: 3, country: "Netherlands", name: "Max Verstappen", points: 306 },
  { rank: 4, country: "Britain", name: "George Russell", points: 252 },
  { rank: 5, country: "Monaco", name: "Charles Leclerc", points: 192 },
  { rank: 6, country: "Britain", name: "Lewis Hamilton", points: 142 },
  { rank: 7, country: "Italy", name: "Kimi Antonelli", points: 89 },
  { rank: 8, country: "Thailand", name: "Alexander Albon", points: 73 },
  { rank: 9, country: "Germany", name: "Nico Hülkenberg", points: 41 },
  { rank: 10, country: "France", name: "Isack Hadjar", points: 39 },
  { rank: 11, country: "Spain", name: "Carlos Sainz", points: 38 },
  { rank: 12, country: "Spain", name: "Fernando Alonso", points: 37 },
  { rank: 13, country: "Canada", name: "Lance Stroll", points: 32 },
  { rank: 14, country: "New Zealand", name: "Liam Lawson", points: 30 },
  { rank: 15, country: "France", name: "Esteban Ocon", points: 28 },
  { rank: 16, country: "Japan", name: "Yuki Tsunoda", points: 28 },
  { rank: 17, country: "France", name: "Pierre Gasly", points: 20 },
  { rank: 18, country: "Britain", name: "Oliver Bearman", points: 20 },
  { rank: 19, country: "Brazil", name: "Gabriel Bortoleto", points: 18 },
  { rank: 20, country: "Argentina", name: "Franco Colapinto", points: 0 },
];
