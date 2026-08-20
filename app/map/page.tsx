"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type University = {
  id: number;
  name: string;
  city: string;
  country: string;
  flag: string;
  lat: number;
  lng: number;
  tuition: string;
  level: string;
  majors: string[];
  website: string;
};

const universities: University[] = [
  {
    id: 1,
    name: "Harvard University",
    city: "Cambridge",
    country: "USA",
    flag: "🇺🇸",
    lat: 42.377,
    lng: -71.116,
    tuition: "$59,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Law", "Medicine", "Computer Science"],
    website: "https://www.harvard.edu",
  },
  {
    id: 2,
    name: "Massachusetts Institute of Technology",
    city: "Cambridge",
    country: "USA",
    flag: "🇺🇸",
    lat: 42.360,
    lng: -71.094,
    tuition: "$61,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Computer Science", "Engineering", "AI", "Physics"],
    website: "https://www.mit.edu",
  },
  {
    id: 3,
    name: "Stanford University",
    city: "Stanford",
    country: "USA",
    flag: "🇺🇸",
    lat: 37.427,
    lng: -122.170,
    tuition: "$62,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Computer Science", "Business", "Engineering", "AI"],
    website: "https://www.stanford.edu",
  },
  {
    id: 4,
    name: "Princeton University",
    city: "Princeton",
    country: "USA",
    flag: "🇺🇸",
    lat: 40.344,
    lng: -74.651,
    tuition: "$59,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Economics", "Engineering", "Physics", "Politics"],
    website: "https://www.princeton.edu",
  },
  {
    id: 5,
    name: "Yale University",
    city: "New Haven",
    country: "USA",
    flag: "🇺🇸",
    lat: 41.316,
    lng: -72.922,
    tuition: "$64,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Law", "Medicine", "Business", "Arts"],
    website: "https://www.yale.edu",
  },
  {
    id: 6,
    name: "Columbia University",
    city: "New York",
    country: "USA",
    flag: "🇺🇸",
    lat: 40.807,
    lng: -73.962,
    tuition: "$66,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Law", "Engineering", "Medicine"],
    website: "https://www.columbia.edu",
  },
  {
    id: 7,
    name: "University of Chicago",
    city: "Chicago",
    country: "USA",
    flag: "🇺🇸",
    lat: 41.789,
    lng: -87.599,
    tuition: "$63,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Economics", "Law", "Business", "Computer Science"],
    website: "https://www.uchicago.edu",
  },
  {
    id: 8,
    name: "University of Pennsylvania",
    city: "Philadelphia",
    country: "USA",
    flag: "🇺🇸",
    lat: 39.952,
    lng: -75.193,
    tuition: "$63,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Medicine", "Engineering", "Economics"],
    website: "https://www.upenn.edu",
  },
  {
    id: 9,
    name: "Cornell University",
    city: "Ithaca",
    country: "USA",
    flag: "🇺🇸",
    lat: 42.453,
    lng: -76.473,
    tuition: "$65,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Architecture", "Business", "Computer Science"],
    website: "https://www.cornell.edu",
  },
  {
    id: 10,
    name: "Duke University",
    city: "Durham",
    country: "USA",
    flag: "🇺🇸",
    lat: 36.001,
    lng: -78.938,
    tuition: "$63,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Law", "Business", "Engineering"],
    website: "https://www.duke.edu",
  },

  {
    id: 11,
    name: "University of Oxford",
    city: "Oxford",
    country: "UK",
    flag: "🇬🇧",
    lat: 51.754,
    lng: -1.254,
    tuition: "£30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Law", "Medicine", "Economics", "Computer Science"],
    website: "https://www.ox.ac.uk",
  },
  {
    id: 12,
    name: "University of Cambridge",
    city: "Cambridge",
    country: "UK",
    flag: "🇬🇧",
    lat: 52.205,
    lng: 0.119,
    tuition: "£28,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Medicine", "Physics"],
    website: "https://www.cam.ac.uk",
  },
  {
    id: 13,
    name: "Imperial College London",
    city: "London",
    country: "UK",
    flag: "🇬🇧",
    lat: 51.499,
    lng: -0.174,
    tuition: "£35,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Medicine", "AI", "Business"],
    website: "https://www.imperial.ac.uk",
  },
  {
    id: 14,
    name: "University College London",
    city: "London",
    country: "UK",
    flag: "🇬🇧",
    lat: 51.524,
    lng: -0.134,
    tuition: "£30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Architecture", "Medicine", "Engineering", "Arts"],
    website: "https://www.ucl.ac.uk",
  },
  {
    id: 15,
    name: "London School of Economics",
    city: "London",
    country: "UK",
    flag: "🇬🇧",
    lat: 51.514,
    lng: -0.116,
    tuition: "£27,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Economics", "Finance", "Politics", "Law"],
    website: "https://www.lse.ac.uk",
  },

  {
    id: 16,
    name: "University of Toronto",
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    lat: 43.662,
    lng: -79.395,
    tuition: "CAD 45,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Computer Science", "Business", "Medicine", "Engineering"],
    website: "https://www.utoronto.ca",
  },
  {
    id: 17,
    name: "University of British Columbia",
    city: "Vancouver",
    country: "Canada",
    flag: "🇨🇦",
    lat: 49.261,
    lng: -123.247,
    tuition: "CAD 40,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Business", "Computer Science", "Arts"],
    website: "https://www.ubc.ca",
  },
  {
    id: 18,
    name: "McGill University",
    city: "Montreal",
    country: "Canada",
    flag: "🇨🇦",
    lat: 45.505,
    lng: -73.578,
    tuition: "CAD 35,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Law", "Business", "Science"],
    website: "https://www.mcgill.ca",
  },
  {
    id: 19,
    name: "University of Alberta",
    city: "Edmonton",
    country: "Canada",
    flag: "🇨🇦",
    lat: 53.523,
    lng: -113.526,
    tuition: "CAD 30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Medicine", "Science", "Business"],
    website: "https://www.ualberta.ca",
  },
  {
    id: 20,
    name: "University of Waterloo",
    city: "Waterloo",
    country: "Canada",
    flag: "🇨🇦",
    lat: 43.472,
    lng: -80.544,
    tuition: "CAD 35,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Computer Science", "Engineering", "Mathematics", "Business"],
    website: "https://uwaterloo.ca",
  },

  {
    id: 21,
    name: "Technical University of Munich",
    city: "Munich",
    country: "Germany",
    flag: "🇩🇪",
    lat: 48.150,
    lng: 11.567,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "AI", "Physics"],
    website: "https://www.tum.de",
  },
  {
    id: 22,
    name: "LMU Munich",
    city: "Munich",
    country: "Germany",
    flag: "🇩🇪",
    lat: 48.150,
    lng: 11.580,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Law", "Science", "Economics"],
    website: "https://www.lmu.de",
  },
  {
    id: 23,
    name: "Heidelberg University",
    city: "Heidelberg",
    country: "Germany",
    flag: "🇩🇪",
    lat: 49.409,
    lng: 8.674,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Science", "Law", "Humanities"],
    website: "https://www.uni-heidelberg.de",
  },
  {
    id: 24,
    name: "Humboldt University of Berlin",
    city: "Berlin",
    country: "Germany",
    flag: "🇩🇪",
    lat: 52.518,
    lng: 13.394,
    tuition: "€2,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Arts", "Law", "Economics", "Computer Science"],
    website: "https://www.hu-berlin.de",
  },
  {
    id: 25,
    name: "RWTH Aachen University",
    city: "Aachen",
    country: "Germany",
    flag: "🇩🇪",
    lat: 50.777,
    lng: 6.077,
    tuition: "€2,500+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Technology", "Computer Science", "Physics"],
    website: "https://www.rwth-aachen.de",
  },

  {
    id: 26,
    name: "Sorbonne University",
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    lat: 48.849,
    lng: 2.345,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Medicine", "Arts", "Humanities"],
    website: "https://www.sorbonne-universite.fr",
  },
  {
    id: 27,
    name: "École Polytechnique",
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    lat: 48.714,
    lng: 2.208,
    tuition: "€15,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Physics", "Mathematics", "Computer Science"],
    website: "https://www.polytechnique.edu",
  },
  {
    id: 28,
    name: "PSL University",
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    lat: 48.846,
    lng: 2.337,
    tuition: "€5,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Arts", "Economics", "Engineering"],
    website: "https://psl.eu",
  },
  {
    id: 29,
    name: "Paris-Saclay University",
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    lat: 48.710,
    lng: 2.166,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Engineering", "AI", "Mathematics"],
    website: "https://www.universite-paris-saclay.fr",
  },
  {
    id: 30,
    name: "Sciences Po",
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    lat: 48.854,
    lng: 2.327,
    tuition: "€14,000+",
    level: "Bachelor / Master",
    majors: ["Politics", "Economics", "Law", "International Relations"],
    website: "https://www.sciencespo.fr",
  },

  {
    id: 31,
    name: "ETH Zurich",
    city: "Zurich",
    country: "Switzerland",
    flag: "🇨🇭",
    lat: 47.376,
    lng: 8.548,
    tuition: "CHF 1,500+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "AI", "Physics"],
    website: "https://ethz.ch",
  },
  {
    id: 32,
    name: "EPFL",
    city: "Lausanne",
    country: "Switzerland",
    flag: "🇨🇭",
    lat: 46.519,
    lng: 6.566,
    tuition: "CHF 1,500+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Robotics", "Science"],
    website: "https://www.epfl.ch",
  },
  {
    id: 33,
    name: "University of Zurich",
    city: "Zurich",
    country: "Switzerland",
    flag: "🇨🇭",
    lat: 47.376,
    lng: 8.548,
    tuition: "CHF 2,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Economics", "Science", "Law"],
    website: "https://www.uzh.ch",
  },

  {
    id: 34,
    name: "University of Amsterdam",
    city: "Amsterdam",
    country: "Netherlands",
    flag: "🇳🇱",
    lat: 52.355,
    lng: 4.955,
    tuition: "€12,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Economics", "Science", "Computer Science"],
    website: "https://www.uva.nl",
  },
  {
    id: 35,
    name: "Delft University of Technology",
    city: "Delft",
    country: "Netherlands",
    flag: "🇳🇱",
    lat: 52.002,
    lng: 4.373,
    tuition: "€15,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Architecture", "Technology", "AI"],
    website: "https://www.tudelft.nl",
  },
  {
    id: 36,
    name: "Leiden University",
    city: "Leiden",
    country: "Netherlands",
    flag: "🇳🇱",
    lat: 52.158,
    lng: 4.485,
    tuition: "€13,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Law", "Medicine", "Arts", "Science"],
    website: "https://www.universiteitleiden.nl",
  },

  {
    id: 37,
    name: "University of Bologna",
    city: "Bologna",
    country: "Italy",
    flag: "🇮🇹",
    lat: 44.494,
    lng: 11.342,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Law", "Business", "Medicine", "Engineering"],
    website: "https://www.unibo.it",
  },
  {
    id: 38,
    name: "Sapienza University of Rome",
    city: "Rome",
    country: "Italy",
    flag: "🇮🇹",
    lat: 41.903,
    lng: 12.515,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Engineering", "Economics", "Arts"],
    website: "https://www.uniroma1.it",
  },

  {
    id: 39,
    name: "University of Tokyo",
    city: "Tokyo",
    country: "Japan",
    flag: "🇯🇵",
    lat: 35.712,
    lng: 139.762,
    tuition: "¥535,800+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Medicine", "Economics"],
    website: "https://www.u-tokyo.ac.jp",
  },
  {
    id: 40,
    name: "Kyoto University",
    city: "Kyoto",
    country: "Japan",
    flag: "🇯🇵",
    lat: 35.027,
    lng: 135.780,
    tuition: "¥535,800+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Medicine", "Engineering", "Law"],
    website: "https://www.kyoto-u.ac.jp",
  },
  {
    id: 41,
    name: "Osaka University",
    city: "Osaka",
    country: "Japan",
    flag: "🇯🇵",
    lat: 34.823,
    lng: 135.525,
    tuition: "¥535,800+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Medicine", "Science", "Business"],
    website: "https://www.osaka-u.ac.jp",
  },
  {
    id: 42,
    name: "Tohoku University",
    city: "Sendai",
    country: "Japan",
    flag: "🇯🇵",
    lat: 38.255,
    lng: 140.867,
    tuition: "¥535,800+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Science", "Medicine", "AI"],
    website: "https://www.tohoku.ac.jp",
  },

  {
    id: 43,
    name: "Seoul National University",
    city: "Seoul",
    country: "South Korea",
    flag: "🇰🇷",
    lat: 37.460,
    lng: 126.951,
    tuition: "₩3,000,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Business", "Medicine", "Computer Science"],
    website: "https://www.snu.ac.kr",
  },
  {
    id: 44,
    name: "KAIST",
    city: "Daejeon",
    country: "South Korea",
    flag: "🇰🇷",
    lat: 36.373,
    lng: 127.365,
    tuition: "₩3,500,000+",
    level: "Bachelor / Master / PhD",
    majors: ["AI", "Engineering", "Computer Science", "Robotics"],
    website: "https://www.kaist.ac.kr",
  },
  {
    id: 45,
    name: "Yonsei University",
    city: "Seoul",
    country: "South Korea",
    flag: "🇰🇷",
    lat: 37.565,
    lng: 126.938,
    tuition: "₩4,000,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Medicine", "Engineering", "Economics"],
    website: "https://www.yonsei.ac.kr",
  },
  {
    id: 46,
    name: "Korea University",
    city: "Seoul",
    country: "South Korea",
    flag: "🇰🇷",
    lat: 37.590,
    lng: 127.027,
    tuition: "₩4,000,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Law", "Engineering", "Economics"],
    website: "https://www.korea.edu",
  },

  {
    id: 47,
    name: "Tsinghua University",
    city: "Beijing",
    country: "China",
    flag: "🇨🇳",
    lat: 40.000,
    lng: 116.326,
    tuition: "¥30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "AI", "Business"],
    website: "https://www.tsinghua.edu.cn",
  },
  {
    id: 48,
    name: "Peking University",
    city: "Beijing",
    country: "China",
    flag: "🇨🇳",
    lat: 39.987,
    lng: 116.305,
    tuition: "¥30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Law", "Economics", "Science"],
    website: "https://english.pku.edu.cn",
  },
  {
    id: 49,
    name: "Fudan University",
    city: "Shanghai",
    country: "China",
    flag: "🇨🇳",
    lat: 31.298,
    lng: 121.503,
    tuition: "¥30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Business", "Economics", "Science"],
    website: "https://www.fudan.edu.cn",
  },
  {
    id: 50,
    name: "Zhejiang University",
    city: "Hangzhou",
    country: "China",
    flag: "🇨🇳",
    lat: 30.308,
    lng: 120.085,
    tuition: "¥30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Medicine", "Business"],
    website: "https://www.zju.edu.cn",
  },

  {
    id: 51,
    name: "National University of Singapore",
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    lat: 1.296,
    lng: 103.776,
    tuition: "SGD 30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Computer Science", "Business", "Engineering", "Medicine"],
    website: "https://www.nus.edu.sg",
  },
  {
    id: 52,
    name: "Nanyang Technological University",
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    lat: 1.348,
    lng: 103.683,
    tuition: "SGD 30,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "AI", "Business", "Science"],
    website: "https://www.ntu.edu.sg",
  },

  {
    id: 53,
    name: "University of Melbourne",
    city: "Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    lat: -37.798,
    lng: 144.961,
    tuition: "AUD 40,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Business", "Law", "Engineering"],
    website: "https://www.unimelb.edu.au",
  },
  {
    id: 54,
    name: "University of Sydney",
    city: "Sydney",
    country: "Australia",
    flag: "🇦🇺",
    lat: -33.888,
    lng: 151.187,
    tuition: "AUD 42,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Business", "Engineering", "Arts"],
    website: "https://www.sydney.edu.au",
  },
  {
    id: 55,
    name: "Australian National University",
    city: "Canberra",
    country: "Australia",
    flag: "🇦🇺",
    lat: -35.277,
    lng: 149.118,
    tuition: "AUD 38,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Politics", "Economics", "Engineering"],
    website: "https://www.anu.edu.au",
  },

  {
    id: 56,
    name: "Al-Farabi Kazakh National University",
    city: "Almaty",
    country: "Kazakhstan",
    flag: "🇰🇿",
    lat: 43.222,
    lng: 76.920,
    tuition: "₸1,500,000+",
    level: "Bachelor / Master / PhD",
    majors: ["IT", "Economics", "Law", "Science"],
    website: "https://www.kaznu.kz",
  },
  {
    id: 57,
    name: "Nazarbayev University",
    city: "Astana",
    country: "Kazakhstan",
    flag: "🇰🇿",
    lat: 51.091,
    lng: 71.398,
    tuition: "Грант / ақылы",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Business", "Medicine"],
    website: "https://nu.edu.kz",
  },
  {
    id: 58,
    name: "L.N. Gumilyov Eurasian National University",
    city: "Astana",
    country: "Kazakhstan",
    flag: "🇰🇿",
    lat: 51.160,
    lng: 71.470,
    tuition: "₸1,200,000+",
    level: "Bachelor / Master / PhD",
    majors: ["IT", "Economics", "Law", "Engineering"],
    website: "https://enu.kz",
  },
  {
    id: 59,
    name: "Satbayev University",
    city: "Almaty",
    country: "Kazakhstan",
    flag: "🇰🇿",
    lat: 43.238,
    lng: 76.931,
    tuition: "₸1,300,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "IT", "Mining", "Technology"],
    website: "https://satbayev.university",
  },
  {
    id: 60,
    name: "KIMEP University",
    city: "Almaty",
    country: "Kazakhstan",
    flag: "🇰🇿",
    lat: 43.237,
    lng: 76.909,
    tuition: "₸2,000,000+",
    level: "Bachelor / Master",
    majors: ["Business", "Finance", "Economics", "Marketing"],
    website: "https://www.kimep.kz",
  },

  {
    id: 61,
    name: "Middle East Technical University",
    city: "Ankara",
    country: "Turkey",
    flag: "🇹🇷",
    lat: 39.891,
    lng: 32.782,
    tuition: "$2,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Architecture", "Physics"],
    website: "https://www.metu.edu.tr",
  },
  {
    id: 62,
    name: "Istanbul Technical University",
    city: "Istanbul",
    country: "Turkey",
    flag: "🇹🇷",
    lat: 41.105,
    lng: 29.025,
    tuition: "$3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Architecture", "Technology", "IT"],
    website: "https://www.itu.edu.tr",
  },
  {
    id: 63,
    name: "Boğaziçi University",
    city: "Istanbul",
    country: "Turkey",
    flag: "🇹🇷",
    lat: 41.084,
    lng: 29.050,
    tuition: "$2,500+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Business", "Economics", "Computer Science"],
    website: "https://bogazici.edu.tr",
  },

  {
    id: 64,
    name: "IIT Bombay",
    city: "Mumbai",
    country: "India",
    flag: "🇮🇳",
    lat: 19.133,
    lng: 72.915,
    tuition: "$5,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "AI", "Science"],
    website: "https://www.iitb.ac.in",
  },
  {
    id: 65,
    name: "IIT Delhi",
    city: "Delhi",
    country: "India",
    flag: "🇮🇳",
    lat: 28.546,
    lng: 77.193,
    tuition: "$5,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Technology", "Science"],
    website: "https://home.iitd.ac.in",
  },

  {
    id: 66,
    name: "University of São Paulo",
    city: "São Paulo",
    country: "Brazil",
    flag: "🇧🇷",
    lat: -23.561,
    lng: -46.731,
    tuition: "Public university",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Engineering", "Business", "Science"],
    website: "https://www5.usp.br",
  },
  {
    id: 67,
    name: "Federal University of Rio de Janeiro",
    city: "Rio de Janeiro",
    country: "Brazil",
    flag: "🇧🇷",
    lat: -22.861,
    lng: -43.224,
    tuition: "Public university",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Medicine", "Science", "Arts"],
    website: "https://ufrj.br",
  },

  {
    id: 68,
    name: "KTH Royal Institute of Technology",
    city: "Stockholm",
    country: "Sweden",
    flag: "🇸🇪",
    lat: 59.349,
    lng: 18.069,
    tuition: "SEK 150,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Architecture", "AI"],
    website: "https://www.kth.se",
  },
  {
    id: 69,
    name: "Lund University",
    city: "Lund",
    country: "Sweden",
    flag: "🇸🇪",
    lat: 55.710,
    lng: 13.204,
    tuition: "SEK 120,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Engineering", "Medicine", "Business"],
    website: "https://www.lu.se",
  },

  {
    id: 70,
    name: "University of Copenhagen",
    city: "Copenhagen",
    country: "Denmark",
    flag: "🇩🇰",
    lat: 55.680,
    lng: 12.572,
    tuition: "€8,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Science", "Law", "Economics"],
    website: "https://www.ku.dk",
  },

  {
    id: 71,
    name: "University of Oslo",
    city: "Oslo",
    country: "Norway",
    flag: "🇳🇴",
    lat: 59.939,
    lng: 10.723,
    tuition: "Low / public",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Science", "Law", "Economics"],
    website: "https://www.uio.no",
  },

  {
    id: 72,
    name: "University of Helsinki",
    city: "Helsinki",
    country: "Finland",
    flag: "🇫🇮",
    lat: 60.172,
    lng: 24.951,
    tuition: "€13,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Medicine", "Education", "Technology"],
    website: "https://www.helsinki.fi",
  },

  {
    id: 73,
    name: "University of Vienna",
    city: "Vienna",
    country: "Austria",
    flag: "🇦🇹",
    lat: 48.214,
    lng: 16.361,
    tuition: "€1,500+",
    level: "Bachelor / Master / PhD",
    majors: ["Law", "Economics", "Science", "Arts"],
    website: "https://www.univie.ac.at",
  },

  {
    id: 74,
    name: "KU Leuven",
    city: "Leuven",
    country: "Belgium",
    flag: "🇧🇪",
    lat: 50.877,
    lng: 4.701,
    tuition: "€5,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Business", "Medicine", "Science"],
    website: "https://www.kuleuven.be",
  },

  {
    id: 75,
    name: "Trinity College Dublin",
    city: "Dublin",
    country: "Ireland",
    flag: "🇮🇪",
    lat: 53.344,
    lng: -6.254,
    tuition: "€20,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Computer Science", "Business", "Law", "Arts"],
    website: "https://www.tcd.ie",
  },

  {
    id: 76,
    name: "University of Auckland",
    city: "Auckland",
    country: "New Zealand",
    flag: "🇳🇿",
    lat: -36.852,
    lng: 174.769,
    tuition: "NZD 35,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Medicine", "Business", "Science"],
    website: "https://www.auckland.ac.nz",
  },

  {
    id: 77,
    name: "University of Hong Kong",
    city: "Hong Kong",
    country: "Hong Kong",
    flag: "🇭🇰",
    lat: 22.284,
    lng: 114.137,
    tuition: "HKD 170,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Medicine", "Law", "Engineering"],
    website: "https://www.hku.hk",
  },

  {
    id: 78,
    name: "Hong Kong University of Science and Technology",
    city: "Hong Kong",
    country: "Hong Kong",
    flag: "🇭🇰",
    lat: 22.337,
    lng: 114.263,
    tuition: "HKD 150,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Computer Science", "Business", "Science"],
    website: "https://hkust.edu.hk",
  },

  {
    id: 79,
    name: "University of Barcelona",
    city: "Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    lat: 41.386,
    lng: 2.164,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Business", "Law", "Arts"],
    website: "https://www.ub.edu",
  },

  {
    id: 80,
    name: "Autonomous University of Madrid",
    city: "Madrid",
    country: "Spain",
    flag: "🇪🇸",
    lat: 40.546,
    lng: -3.696,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Medicine", "Economics", "Engineering"],
    website: "https://www.uam.es",
  },

  {
    id: 81,
    name: "University of Lisbon",
    city: "Lisbon",
    country: "Portugal",
    flag: "🇵🇹",
    lat: 38.752,
    lng: -9.157,
    tuition: "€5,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Medicine", "Engineering", "Arts"],
    website: "https://www.ulisboa.pt",
  },

  {
    id: 82,
    name: "University of Warsaw",
    city: "Warsaw",
    country: "Poland",
    flag: "🇵🇱",
    lat: 52.239,
    lng: 21.018,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Computer Science", "Economics", "Law", "Science"],
    website: "https://en.uw.edu.pl",
  },

  {
    id: 83,
    name: "Charles University",
    city: "Prague",
    country: "Czech Republic",
    flag: "🇨🇿",
    lat: 50.087,
    lng: 14.420,
    tuition: "€4,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Law", "Science", "Arts"],
    website: "https://cuni.cz",
  },

  {
    id: 84,
    name: "University of Athens",
    city: "Athens",
    country: "Greece",
    flag: "🇬🇷",
    lat: 37.968,
    lng: 23.763,
    tuition: "€2,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Law", "Science", "Arts"],
    website: "https://en.uoa.gr",
  },

  {
    id: 85,
    name: "University of Copenhagen Business School",
    city: "Copenhagen",
    country: "Denmark",
    flag: "🇩🇰",
    lat: 55.681,
    lng: 12.534,
    tuition: "€8,000+",
    level: "Bachelor / Master",
    majors: ["Business", "Finance", "Economics", "Marketing"],
    website: "https://www.cbs.dk",
  },

  {
    id: 86,
    name: "University of Manchester",
    city: "Manchester",
    country: "UK",
    flag: "🇬🇧",
    lat: 53.466,
    lng: -2.233,
    tuition: "£25,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Business", "Medicine", "Computer Science"],
    website: "https://www.manchester.ac.uk",
  },

  {
    id: 87,
    name: "University of Edinburgh",
    city: "Edinburgh",
    country: "UK",
    flag: "🇬🇧",
    lat: 55.944,
    lng: -3.188,
    tuition: "£25,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Computer Science", "Business", "Arts"],
    website: "https://www.ed.ac.uk",
  },

  {
    id: 88,
    name: "University of Bristol",
    city: "Bristol",
    country: "UK",
    flag: "🇬🇧",
    lat: 51.459,
    lng: -2.603,
    tuition: "£25,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "Medicine", "Business", "Science"],
    website: "https://www.bristol.ac.uk",
  },

  {
    id: 89,
    name: "University of Warwick",
    city: "Coventry",
    country: "UK",
    flag: "🇬🇧",
    lat: 52.379,
    lng: -1.561,
    tuition: "£25,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Economics", "Computer Science", "Engineering"],
    website: "https://warwick.ac.uk",
  },

  {
    id: 90,
    name: "University of Glasgow",
    city: "Glasgow",
    country: "UK",
    flag: "🇬🇧",
    lat: 55.872,
    lng: -4.289,
    tuition: "£25,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Engineering", "Business", "Science"],
    website: "https://www.gla.ac.uk",
  },

  {
    id: 91,
    name: "Monash University",
    city: "Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    lat: -37.910,
    lng: 145.135,
    tuition: "AUD 38,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Business", "Engineering", "IT"],
    website: "https://www.monash.edu",
  },

  {
    id: 92,
    name: "University of Queensland",
    city: "Brisbane",
    country: "Australia",
    flag: "🇦🇺",
    lat: -27.497,
    lng: 153.013,
    tuition: "AUD 38,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Science", "Engineering", "Business"],
    website: "https://www.uq.edu.au",
  },

  {
    id: 93,
    name: "University of Amsterdam",
    city: "Amsterdam",
    country: "Netherlands",
    flag: "🇳🇱",
    lat: 52.355,
    lng: 4.955,
    tuition: "€12,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Business", "Computer Science", "Economics", "Science"],
    website: "https://www.uva.nl",
  },

  {
    id: 94,
    name: "Utrecht University",
    city: "Utrecht",
    country: "Netherlands",
    flag: "🇳🇱",
    lat: 52.085,
    lng: 5.176,
    tuition: "€12,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Science", "Law", "Economics"],
    website: "https://www.uu.nl",
  },

  {
    id: 95,
    name: "University of Milan",
    city: "Milan",
    country: "Italy",
    flag: "🇮🇹",
    lat: 45.462,
    lng: 9.177,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Business", "Law", "Science"],
    website: "https://www.unimi.it",
  },

  {
    id: 96,
    name: "University of Padua",
    city: "Padua",
    country: "Italy",
    flag: "🇮🇹",
    lat: 45.406,
    lng: 11.877,
    tuition: "€3,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Engineering", "Science", "Arts"],
    website: "https://www.unipd.it",
  },

  {
    id: 97,
    name: "Nagoya University",
    city: "Nagoya",
    country: "Japan",
    flag: "🇯🇵",
    lat: 35.155,
    lng: 136.965,
    tuition: "¥535,800+",
    level: "Bachelor / Master / PhD",
    majors: ["Science", "Engineering", "Medicine", "AI"],
    website: "https://www.nagoya-u.ac.jp",
  },

  {
    id: 98,
    name: "POSTECH",
    city: "Pohang",
    country: "South Korea",
    flag: "🇰🇷",
    lat: 36.012,
    lng: 129.323,
    tuition: "₩3,000,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Engineering", "AI", "Robotics", "Science"],
    website: "https://www.postech.ac.kr",
  },

  {
    id: 99,
    name: "Karaganda Buketov University",
    city: "Karaganda",
    country: "Kazakhstan",
    flag: "🇰🇿",
    lat: 49.805,
    lng: 73.088,
    tuition: "₸900,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Education", "Science", "Economics", "IT"],
    website: "https://buketov.edu.kz",
  },

  {
    id: 100,
    name: "University of Zurich",
    city: "Zurich",
    country: "Switzerland",
    flag: "🇨🇭",
    lat: 47.376,
    lng: 8.548,
    tuition: "CHF 2,000+",
    level: "Bachelor / Master / PhD",
    majors: ["Medicine", "Economics", "Science", "Law"],
    website: "https://www.uzh.ch",
  },
];

export default function GlobalMapPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("Барлық елдер");
  const [selected, setSelected] = useState<University | null>(null);

  const countries = useMemo(
    () => [
      "Барлық елдер",
      ...Array.from(new Set(universities.map((u) => u.country))).sort(),
    ],
    []
  );

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    return universities.filter((u) => {
      const matchesCountry =
        country === "Барлық елдер" || u.country === country;

      const matchesSearch =
        !query ||
        u.name.toLowerCase().includes(query) ||
        u.city.toLowerCase().includes(query) ||
        u.country.toLowerCase().includes(query) ||
        u.majors.some((major) =>
          major.toLowerCase().includes(query)
        );

      return matchesCountry && matchesSearch;
    });
  }, [search, country]);

  return (
    <main className="min-h-screen bg-[#090014] text-white">

      <nav className="border-b border-white/10 bg-[#090014]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 font-bold">
              F
            </div>

            <span className="text-xl font-bold">
              FuturePath<span className="text-purple-400"> AI</span>
            </span>
          </Link>

          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5"
            >
              ← Басты бет
            </Link>

            <Link
              href="/universities"
              className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500"
            >
              🎓 Университеттер
            </Link>
          </div>

        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-purple-400">
            FUTUREPATH AI
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            🌍 Global University Map
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Әлемнің үздік университеттерін зертте,
            салыстыр және өзіңе сәйкес оқу орнын тап.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          <Stat
            title="Университеттер"
            value={`${universities.length}`}
            accent
          />

          <Stat
            title="Елдер"
            value={`${countries.length - 1}`}
          />

          <Stat
            title="Қазір көрсетілуде"
            value={`${filtered.length}`}
            accent
          />

        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔎 Университет, қала, ел немесе мамандық..."
            className="flex-1 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-gray-500 focus:border-purple-500"
          />

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded-2xl border border-white/10 bg-[#170021] px-5 py-4 outline-none"
          >
            {countries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* MAP */}

        <div className="relative mt-8 h-[560px] overflow-hidden rounded-[2rem] border border-purple-500/20 bg-gradient-to-br from-[#12052d] via-[#16002b] to-[#05000b]">

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.25) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="absolute left-[8%] top-[20%] h-40 w-64 rounded-[50%] bg-purple-700/20 blur-2xl" />
          <div className="absolute left-[27%] top-[55%] h-44 w-32 rounded-[50%] bg-purple-700/20 blur-2xl" />
          <div className="absolute left-[45%] top-[25%] h-52 w-72 rounded-[50%] bg-purple-700/20 blur-2xl" />
          <div className="absolute right-[15%] top-[35%] h-44 w-48 rounded-[50%] bg-purple-700/20 blur-2xl" />

          {filtered.map((university) => {
            const left =
              ((university.lng + 180) / 360) * 100;

            const top =
              ((90 - university.lat) / 180) * 100;

            return (
              <button
                key={university.id}
                type="button"
                onClick={() => setSelected(university)}
                className="group absolute"
                style={{
                  left: `${Math.max(2, Math.min(98, left))}%`,
                  top: `${Math.max(7, Math.min(93, top))}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="block h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)] transition group-hover:scale-150" />

                <span className="pointer-events-none absolute bottom-6 left-1/2 hidden w-64 -translate-x-1/2 rounded-xl border border-purple-500/30 bg-[#10001f] p-3 text-left shadow-2xl group-hover:block">
                  <span className="block font-bold">
                    {university.flag} {university.name}
                  </span>

                  <span className="mt-1 block text-xs text-purple-300">
                    {university.city}, {university.country}
                  </span>
                </span>
              </button>
            );
          })}

          <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-xs text-gray-300 backdrop-blur">
            📍 Университет нүктесін басып толық ақпаратты көр
          </div>

        </div>

        {/* SELECTED UNIVERSITY */}

        {selected && (
          <div className="mt-8 rounded-[2rem] border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-white/[0.03] p-7">

            <div className="flex flex-col justify-between gap-6 md:flex-row">

              <div>

                <div className="text-4xl">
                  {selected.flag}
                </div>

                <h2 className="mt-3 text-3xl font-bold">
                  {selected.name}
                </h2>

                <p className="mt-2 text-purple-300">
                  📍 {selected.city}, {selected.country}
                </p>

              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="h-fit rounded-xl border border-white/10 px-4 py-2 text-sm text-gray-400 hover:bg-white/5"
              >
                Жабу
              </button>

            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">

              <InfoBox
                title="🎓 Оқу деңгейі"
                value={selected.level}
              />

              <InfoBox
                title="💰 Оқу ақысы"
                value={selected.tuition}
              />

              <InfoBox
                title="📚 Бағыттар"
                value={selected.majors.join(", ")}
              />

            </div>

            <a
              href={selected.website}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500"
            >
              🌐 Ресми сайтқа өту →
            </a>

          </div>
        )}

        {/* UNIVERSITY CARDS */}

        <div className="mt-12">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <p className="text-sm font-bold tracking-widest text-purple-400">
                UNIVERSITY DATABASE
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Университеттер
              </h2>
            </div>

            <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              {filtered.length} нәтиже
            </span>

          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {filtered.map((university) => (

              <div
                key={`card-${university.id}`}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-500/40"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl">
                    {university.flag}
                  </div>

                  <div>
                    <h3 className="font-bold leading-6">
                      {university.name}
                    </h3>

                    <p className="mt-1 text-sm text-purple-300">
                      📍 {university.city}, {university.country}
                    </p>
                  </div>

                </div>

                <div className="mt-5 space-y-3 text-sm">

                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <span className="text-gray-500">
                      🎓 Деңгейі
                    </span>

                    <p className="mt-1 text-gray-200">
                      {university.level}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <span className="text-gray-500">
                      💰 Оқу ақысы
                    </span>

                    <p className="mt-1 font-semibold text-gray-200">
                      {university.tuition}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <span className="text-gray-500">
                      📚 Негізгі бағыттар
                    </span>

                    <p className="mt-1 leading-6 text-gray-200">
                      {university.majors.join(" • ")}
                    </p>
                  </div>

                </div>

                <div className="mt-5 flex gap-3">

                  <button
                    type="button"
                    onClick={() => {
                      setSelected(university);
                      window.scrollTo({
                        top: 500,
                        behavior: "smooth",
                      });
                    }}
                    className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/5"
                  >
                    Толық ақпарат
                  </button>

                  <a
                    href={university.website}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold hover:bg-purple-500"
                  >
                    🌐
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <footer className="border-t border-white/5 py-8">

        <div className="mx-auto flex max-w-7xl justify-between px-6 text-sm text-gray-500">

          <span>
            © 2026 FuturePath AI
          </span>

          <Link href="/" className="hover:text-purple-400">
            Басты бет
          </Link>

        </div>

      </footer>

    </main>
  );
}

function Stat({
  title,
  value,
  accent = false,
}: {
  title: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p
        className={`mt-2 text-4xl font-bold ${
          accent ? "text-purple-400" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function InfoBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 leading-6 text-gray-200">
        {value}
      </p>
    </div>
  );
}