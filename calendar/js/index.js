const myCalendar = (year,month) => {
    let current_month = month -1
    let previous_month = month -2
    let next_month = month + 1
    const current_month_count = new Date(year,current_month,0).getDate()
    const month_start_day = new Date(year,current_month).getDay();  
    const previous_month_count = new Date(year,previous_month,0).getDate()
    const next_month_count = new Date(year,next_month).getDate()
    const previous_month_begins = new Date(year,previous_month,0).getDay()
    const next_month_begins= new Date(year,next_month).getDay()
    const calendarBody = document.querySelector('.calendar-body')
    const dateElement = document.createElement('div')
// Here we will append the dateELement with the disabled element to the Calendar BOdy
    for (let index = 0; index < [1,2,4,5,6,].length; index++) {
        // const element = array[index];
        dateElement.textContent = 'hello'
        dateElement.className = "disabled"
        calendarBody.appendChild(dateElement)
    }
    return month_start_day
}
console.log(myCalendar(2022,10))

// 'jan-0 feb-1 mar-2 apr-3 may-4 jun-5 jul-6 sept-7 '