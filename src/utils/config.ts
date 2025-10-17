export const COMMON_MEDIA_URL = `https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025`;

export interface driverType {
  team: string;
  firstName: string;
  lastName: string;
  number: number;
  country: string;
  pfpRoute: string;
  npRoute: string;
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
  },
  {
    team: "mclaren",
    firstName: "lando",
    lastName: "norris",
    number: 4,
    country: "united kingdom",
    pfpRoute: "mclaren/lannor01/2025mclarenlannor01front.webp",
    npRoute: "mclaren/lannor01/2025mclarenlannor01numberwhitefrless.webp",
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
  },
  {
    team: "mercedes",
    firstName: "kimi",
    lastName: "antonelli",
    number: 12,
    country: "italy",
    pfpRoute: "mercedes/andant01/2025mercedesandant01right.webp",
    npRoute: "mercedes/andant01/2025mercedesandant01numberwhitefrless.webp",
  },
  {
    team: "mercedes",
    firstName: "george",
    lastName: "russell",
    number: 63,
    country: "united kingdom",
    pfpRoute: "mercedes/georus01/2025mercedesgeorus01right.webp",
    npRoute: "mercedes/georus01/2025mercedesgeorus01numberwhitefrless.webp",
  },
  {
    team: "ferrari",
    firstName: "charles",
    lastName: "leclerc",
    number: 16,
    country: "monaco",
    pfpRoute: "ferrari/chalec01/2025ferrarichalec01right.webp",
    npRoute: "ferrari/chalec01/2025ferrarichalec01numberwhitefrless.webp",
  },
  {
    team: "ferrari",
    firstName: "lewis",
    lastName: "hamilton",
    number: 44,
    country: "united kingdom",
    pfpRoute: "ferrari/lewham01/2025ferrarilewham01front.webp",
    npRoute: "ferrari/lewham01/2025ferrarilewham01numberwhitefrless.webp",
  },
  {
    team: "williams",
    firstName: "carlos",
    lastName: "sainz",
    number: 55,
    country: "spain",
    pfpRoute: "williams/carsai01/2025williamscarsai01right.webp",
    npRoute: "williams/carsai01/2025williamscarsai01numberwhitefrless.webp",
  },
  {
    team: "williams",
    firstName: "alexander",
    lastName: "albon",
    number: 23,
    country: "thailand",
    pfpRoute: "williams/alealb01/2025williamsalealb01front.webp",
    npRoute: "williams/alealb01/2025williamsalealb01numberwhitefrless.webp",
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
  },
  {
    team: "alpine",
    firstName: "pierre",
    lastName: "gasly",
    number: 10,
    country: "france",
    pfpRoute: "alpine/piegas01/2025alpinepiegas01right.webp",
    npRoute: "alpine/piegas01/2025alpinepiegas01numberwhitefrless.webp",
  },
  {
    team: "racing bulls",
    firstName: "franco",
    lastName: "colapinto",
    number: 43,
    country: "argentina",
    pfpRoute: "alpine/fracol01/2025alpinefracol01right.webp",
    npRoute: "alpine/fracol01/2025alpinefracol01numberwhitefrless.webp",
  },
  {
    team: "kick sauber",
    firstName: "nico",
    lastName: "hulkenberg",
    number: 27,
    country: "germany",
    pfpRoute: "kicksauber/nichul01/2025kicksaubernichul01right.webp",
    npRoute: "kicksauber/nichul01/2025kicksaubernichul01numberwhitefrless.webp",
  },
  {
    team: "kick sauber",
    firstName: "gabriel",
    lastName: "bortoleto",
    number: 5,
    country: "brazil",
    pfpRoute: "kicksauber/gabbor01/2025kicksaubergabbor01right.webp",
    npRoute: "kicksauber/gabbor01/2025kicksaubergabbor01numberwhitefrless.webp",
  },
  {
    team: "haas f1 team",
    firstName: "esteban",
    lastName: "ocon",
    number: 31,
    country: "france",
    pfpRoute: "haasf1team/estoco01/2025haasf1teamestoco01right.webp",
    npRoute: "haasf1team/estoco01/2025haasf1teamestoco01numberwhite.webp",
  },
  {
    team: "haas f1 team",
    firstName: "oliver",
    lastName: "bearman",
    number: 87,
    country: "united kingdom",
    pfpRoute: "haas/olibea01/2025haasolibea01right.webp",
    npRoute: "haasf1team/olibea01/2025haasf1teamolibea01numberwhite.webp",
  },
];
