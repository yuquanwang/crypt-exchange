const moment = require("moment")
// const YEARS = () => {
//     const years = []
//     const dateStart = moment()
//     const dateEnd = moment().add(10, 'y')
//     while (dateEnd.diff(dateStart, 'years') >= 0) {
//       years.push(dateStart.format('YYYY'))
//       dateStart.add(1, 'year')
//     }
//     return years
//    }
// console.log(YEARS())


// const MONTHS = () => {
//     const months = []
//     const dateStart = moment()
//     const dateEnd = moment().add(12,'month')

//     while (dateEnd.diff(dateStart, 'months') >= 0) {
//      months.push(dateStart.format('M'))
//      dateStart.add(1, 'month')
//     }

//     return months
// }
// console.log(MONTHS())

//    const DAYS = () => {
//     const days = []
//     const dateStart = moment()
//     const dateEnd = moment().add(30, 'days')
//     while (dateEnd.diff(dateStart, 'days') >= 0) {
//      days.push(dateStart.format('D'))
//      dateStart.add(1, 'days')
//     }
//     return days
//    }
//    console.log(DAYS())


   let year ='2020'
        let tep=[{
                id:year,
                name:year,
                children:[
                   {
                    id:'1',
                    name:'1',
                    children:[{
                        id: '1',
                        name:'2'
                    }]
                   }
                ]
            }]
        getDay=(year,month)=>{
          let date=new Date(year,month,0)
          let day= date.getDate()
          let days=[]
          for(let i=1;i<=day;i++){
            days.push({id:i.toString(),name:i.toString()})
          }
          return days
        }
        getMonth=()=>{
          let month=[]
          let children=[]
          for(let i=1;i<13;i++){
            month.push({id:i.toString(),name:i.toString(),children:children})
          }
          return month
        }
        
        const res=[]
        for(let i=0;i<5;i++){
          res.push(tep[0])
        }

 tep.map(i=>{
          i.children=getMonth()
          i.children.map((item,index)=>{
          item.children=getDay(year,index+1)
        })
        })
        
        console.dir( tep, tep[0]['children'][0]['children'] )