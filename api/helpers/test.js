const activityMonth = [
  {
    serviceYear:"",
    month:"",
    placements:"",
    videoShowings:"",
    hours:"",
    returnVisits:"",
    bibleStudies:"",
    remarks:""
  }
];


activityMonth[0].serviceYear = 2023
activityMonth[0].month = "enero"
activityMonth[0].placements = 15
activityMonth[0].videoShowings = 0
activityMonth[0].hours = 2
activityMonth[0].returnVisits = 1
activityMonth[0].bibleStudies = 10
activityMonth[0].remarks = "Me siento preparado, para hacer mucho más"

console.log(activityMonth)

const year = new Date().getFullYear()
console.log(year)

console.log(typeof(year))