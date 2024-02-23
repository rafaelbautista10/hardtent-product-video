const truckData = [
  {
    manufacturer: "Toyota",
    model: "Tacoma",
    gen: 4,
    yearStart: 2024,
    yearEnd: "current",
    bedSize: 5,
    supporting: true,
  },

  {
    manufacturer: "Toyota",
    model: "Tacoma",
    gen: 4,
    yearStart: 2024,
    yearEnd: "current",
    bedSize: 6,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tacoma",
    gen: 3,
    yearStart: 2016,
    yearEnd: 2023,
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tacoma",
    gen: 3,
    yearStart: 2016,
    yearEnd: 2023,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tacoma",
    gen: 2,
    yearStart: 2005,
    yearEnd: 2015,
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tacoma",
    gen: 2,
    yearStart: 2005,
    yearEnd: 2015,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tacoma",
    gen: 1,
    yearStart: 1995,
    yearEnd: 2004,
    bedSize: 6,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tundra",
    gen: 3,
    yearStart: 2022,
    yearEnd: "current",
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tundra",
    gen: 3,
    yearStart: 2022,
    yearEnd: "current",
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tundra",
    gen: 2,
    yearStart: 2007,
    yearEnd: 2021,
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tundra",
    gen: 2,
    yearStart: 2007,
    yearEnd: 2021,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tundra",
    gen: 2,
    yearStart: 2007,
    yearEnd: 2021,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tundra",
    gen: 1,
    yearStart: 1995,
    yearEnd: 2004,
    bedSize: 6,
    supporting: true,
  },
  {
    manufacturer: "Toyota",
    model: "Tundra",
    gen: 1,
    yearStart: 1995,
    yearEnd: 2004,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Jeep",
    model: "Gladiator",
    gen: 1,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 14,
    yearStart: 2021,
    yearEnd: "current",
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 14,
    yearStart: 2021,
    yearEnd: "current",
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 14,
    yearStart: 2021,
    yearEnd: "current",
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 13,
    yearStart: 2015,
    yearEnd: 2020,
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 13,
    yearStart: 2015,
    yearEnd: 2020,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 13,
    yearStart: 2015,
    yearEnd: 2020,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 12,
    yearStart: 2009,
    yearEnd: 2014,
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 12,
    yearStart: 2009,
    yearEnd: 2014,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 12,
    yearStart: 2009,
    yearEnd: 2014,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 11,
    yearStart: 2004,
    yearEnd: 2008,
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 11,
    yearStart: 2004,
    yearEnd: 2008,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 150",
    gen: 11,
    yearStart: 2004,
    yearEnd: 2008,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 250",
    gen: 4,

    yearStart: 2017,
    yearEnd: "current",
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 250",
    gen: 4,
    yearStart: 2017,
    yearEnd: "current",
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 250",
    gen: 3,
    yearStart: 2011,
    yearEnd: 2016,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 250",
    gen: 3,
    yearStart: 2011,
    yearEnd: 2016,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 250",
    gen: 2,
    yearStart: 2008,
    yearEnd: 2010,

    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "F 250",
    gen: 2,

    yearStart: 2008,
    yearEnd: 2010,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "Ranger",
    gen: 5,
    yearStart: 2023,
    yearEnd: "current",
    bedSize: 6,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "Ranger",
    gen: 5,
    yearStart: 2023,
    yearEnd: "current",
    bedSize: 7,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "Ranger",
    gen: 4,
    yearStart: 2019,
    yearEnd: 2022,
    bedSize: 5,
    supporting: false,
  },
  {
    manufacturer: "Ford",
    model: "Ranger",
    gen: 4,
    yearStart: 2019,
    yearEnd: 2022,
    bedSize: 6,
    supporting: false,
  },
  {
    manufacturer: "Ford",

    model: "Ranger",
    gen: 3,
    yearStart: 1998,
    yearEnd: 2011,
    bedSize: 6,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "Ranger",
    gen: 3,
    yearStart: 1998,
    yearEnd: 2011,
    bedSize: 7,
    supporting: true,
  },
  {
    manufacturer: "Ford",
    model: "Maverick",
    gen: 1,
    yearStart: null,

    yearEnd: null,

    bedSize: null,
    supporting: false,
  },
  {
    manufacturer: "Ram",
    model: "1500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 5.5,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "1500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "1500",
    gen: 4,
    yearStart: 2009,
    yearEnd: 2018,
    bedSize: 5.7,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "1500",
    gen: 4,
    yearStart: 2009,
    yearEnd: 2018,
    bedSize: 6.25,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "1500",
    gen: 4,

    yearStart: 2009,
    yearEnd: 2018,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "1500",

    gen: 4,
    yearStart: 2009,
    yearEnd: 2018,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "1500",
    gen: 3,
    yearStart: 2002,
    yearEnd: 2008,
    bedSize: 6.25,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "1500",
    gen: 3,
    yearStart: 2002,
    yearEnd: 2008,
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "1500",
    gen: 3,
    yearStart: 2002,
    yearEnd: 2008,
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "2500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 6.5,
    supporting: true,
  },
  {
    manufacturer: "Ram",
    model: "2500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 8,
    supporting: true,
  },

  {
    manufacturer: "Ram",
    model: "2500",
    gen: 4,
    yearStart: 2010,
    yearEnd: 2018,
    bedSize: 6.5,
    supporting: false,
  },
  {
    manufacturer: "Ram",
    model: "2500",
    gen: 4,
    yearStart: 2010,
    yearEnd: 2018,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "Ram",
    model: "2500",
    gen: 3,
    yearStart: 2002,
    yearEnd: 2009,
    bedSize: 6.25,
    supporting: false,
  },
  {
    manufacturer: "Ram",
    model: "2500",
    gen: 3,
    yearStart: 2002,
    yearEnd: 2009,
    bedSize: 6.5,
    supporting: false,
  },
  {
    manufacturer: "Ram",
    model: "2500",
    gen: 3,
    yearStart: 2002,
    yearEnd: 2009,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "Rivian",
    model: "R1T",
    gen: 1,
    yearStart: 2021,
    yearEnd: "current",
    bedSize: 4.5,
    supporting: true,
  },
  {
    manufacturer: "Chevrolet",
    model: "Colorado",
    gen: 3,
    yearStart: 2023,
    yearEnd: "current",
    bedSize: 5,
    supporting: true,
  },
  {
    manufacturer: "Chevrolet",
    model: "Colorado",
    gen: 2,
    yearStart: 2012,
    yearEnd: 2022,
    bedSize: 5,
    supporting: true,
  },
  {
    manufacturer: "Chevrolet",
    model: "Colorado",
    gen: 2,
    yearStart: 2012,
    yearEnd: 2022,
    bedSize: 6,
    supporting: true,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 5.8,
    supporting: true,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 6.6,
    supporting: true,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "1500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "Chevrolet",
    model: "2500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "Canyon",
    gen: 3,
    yearStart: 2023,
    yearEnd: "current",
    bedSize: 5,
    supporting: true,
  },
  {
    manufacturer: "GMC",
    model: "Canyon",
    gen: 2,
    yearStart: 2012,
    yearEnd: 2022,
    bedSize: 5,
    supporting: true,
  },
  {
    manufacturer: "GMC",
    model: "Canyon",
    gen: 2,
    yearStart: 2012,
    yearEnd: 2022,
    bedSize: 6,
    supporting: true,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 5.8,
    supporting: true,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 6.6,
    supporting: true,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 8,
    supporting: true,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "1500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 5,
    yearStart: 2019,
    yearEnd: "current",
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 4,
    yearStart: 2014,
    yearEnd: 2019,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 5.8,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 6.6,
    supporting: false,
  },
  {
    manufacturer: "GMC",
    model: "2500",
    gen: 3,
    yearStart: 2007,
    yearEnd: 2013,
    bedSize: 8,
    supporting: false,
  },
  {
    manufacturer: "Nissan",
    model: "Titan",
    gen: 2,
    yearStart: 2016,
    yearEnd: "current",
    bedSize: 6.5,
    supporting: false,
  },
  {
    manufacturer: "Nissan",
    model: "Titan",
    gen: 1,
    yearStart: 2003,
    yearEnd: 2015,
    bedSize: 5.5,
    supporting: false,
  },
  {
    manufacturer: "Nissan",
    model: "Titan",
    gen: 1,

    yearStart: 2003,
    yearEnd: 2015,
    bedSize: 7,

    supporting: false,
  },
  {
    manufacturer: "Nissan",
    model: "Frontier",

    gen: 3,
    yearStart: 2022,
    yearEnd: "current",
    bedSize: 5,
    supporting: true,
  },
  {
    manufacturer: "Nissan",
    model: "Frontier",
    gen: 2,
    yearStart: 2005,
    yearEnd: 2021,
    bedSize: 4,
    supporting: false,
  },
  {
    manufacturer: "Nissan",
    model: "Frontier",
    gen: 2,
    yearStart: 2005,
    yearEnd: 2021,
    bedSize: 5,
    supporting: false,
  },
  {
    manufacturer: "Nissan",
    model: "Frontier",
    gen: 2,
    yearStart: 2005,
    yearEnd: 2021,
    bedSize: 6,
    supporting: false,
  },
];
