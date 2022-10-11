// create a function that adds a value to an event object
let myEvents = {}
myEvents = {
    dates:[1,2],
    Todo:[],
    expiration:[]
}
const addEvent = (event) =>{
    // check if event doesn't exist

}
console.log(myEvents)
// start of myCalendar Function
const myCalendar = (year,month) => {
    let current_month = month - 1
    let previous_month = month -1
    let next_month = month + 1
    const current_month_count = new Date(year,month,0).getDate()
    const month_start_day = new Date(year,current_month).getDay();  
    const previous_month_count = new Date(year,previous_month,0).getDate()
    const next_month_count = new Date(year,next_month).getDate()
    const previous_month_begins = new Date(year,previous_month,0).getDay()
    const next_month_begins= new Date(year,next_month).getDay()
    const calendarBody = document.querySelector('.calendar-body')
    const dateElement = document.createElement('div')
    const month_name = document.querySelector('#month_name')
    const prev_btn = document.querySelector('#prev_btn')
    const next_btn = document.querySelector('#next_btn')
    let active_month 
    calendarBody.textContent = ""
// Here we will append the dateELement with the disabled element to the Calendar Body
    let prev_mnth_start = previous_month_count - month_start_day
    for (let index = 0; index < month_start_day; index++) {
        const dateElement = document.createElement('div')
        // const element = array[index];
        dateElement.textContent = ++prev_mnth_start 
        dateElement.className = "disabled"
        calendarBody.append(dateElement)
    }
// here we will append the current month date data
let today = new Date().getUTCDate()
let this_month = new Date().getUTCMonth()

for (let index = 0; index < current_month_count; index++) {
    const dateElement = document.createElement('div')
    // const element = array[index];
    if(index == today-1 && this_month == monthArray.indexOf(month_name.textContent)){
        dateElement.classList.add('selected')
    }
    dateElement.onclick = () =>{
      let selectedDate = new Date(defaultYear,monthArray.indexOf(month_name.textContent),dateElement.textContent).toDateString()
      for (const x of myEvents.dates) {
        if (x == selectedDate){
            // meaning already have an event here
            // ask if user wants to add to data or delete Data
            console.log('data Found. Do you want to add more or delete current one?')
        }else{
            // data does not exist 
            // ask if user wants to add to data
            console.log('no data! Add Now')
        }
      }
    }
    dateElement.setAttribute('role','button')
    dateElement.textContent = index+1
    calendarBody.append(dateElement)
}
// here we will append the remaining date 
let used_grid = current_month_count + month_start_day 
let total_grid = 42
let remaining_grid = total_grid - used_grid

for (let index = 0; index < remaining_grid; index++) {
    const dateElement = document.createElement('div')
    // const element = array[index];
    dateElement.classList.add('disabled')
    dateElement.textContent = index + 1
    calendarBody.append(dateElement)
}

}
// --- end of my calendar() function
// here we add the controls
let monthArray = ['January','Februray','March','April','May','June','July','August','September','October','November','December']
let defaultYear = new Date().getFullYear()
let defaultMonth = new Date().getMonth()
// display default as current Month after which you can now use the buttons to change default value


// initialization 
month_name.textContent = monthArray[defaultMonth]
myCalendar(defaultYear,defaultMonth+1)
active_month = defaultMonth
// next btn 
prev_btn.onclick =() =>{
    // first get the current selected 
    if (active_month <= 0){
        // do nothing
    }else{
        let new_active = --active_month
        month_name.textContent = monthArray[new_active]
        myCalendar(defaultYear,new_active+1)
    }
}
next_btn.onclick = () => {
    // first get the current selected 
    if (active_month >= 11){
        // do nothing
    }else{
        let new_active = ++active_month
        month_name.textContent = monthArray[new_active]
        myCalendar(defaultYear,new_active+1)
    }
}