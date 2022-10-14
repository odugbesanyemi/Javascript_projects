// create a function that adds a value to an event object
let myEvents = []
// myEvents = [{
//     id:0,
//     event_name:['Wash clothe','clean Bathroom','do Home-work', 'sleep'],
//     date:'Thu Oct 13 2022',
//     desc:['',''],
// },{
//     id:1,
//     event_name:['Wash clothe','clean Bathroom','do Home-work', 'sleep'],
//     date:'Wed Oct 12 2022',
//     desc:['',''],
// }]
const calendarBody = document.querySelector('.calendar-body')

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
      let result_count = 0
      let index_array
    //   on click we want to call the function that checks and adds or remove to the object data
    // ..call function
    // console.log(selectedDate)
      for (let index = 0; index < myEvents.length; index++) {
        const element = myEvents[index];
            if (element.date == selectedDate){
                result_count =1
                index_array= index
                // meaning already have an event here
                // ask if user wants to add to data or delete Data
                // show Buttons
            }            
      }
      showEvents(result_count,selectedDate,index_array)
    }
    dateElement.setAttribute('role','button')
    dateElement.textContent = index+1
    dateElement.classList.add('calen-day')
    calendarBody.append(dateElement)
    // return dateElement
}

// ------------------------------------------
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
let check_filled = () => {
    for (const x of document.querySelectorAll('.calen-day')) {
        for (const y of myEvents) {
            let selected_date = new Date(defaultYear, monthArray.indexOf(month_name.textContent), x.textContent).toDateString()
            if (selected_date == y.date) {
                // check first if there is already the notify_active
                let notify_active = document.createElement('div')
                x.innerHTML = `${x.textContent}<div class="notify-active rounded-circle" ><a href="" data-bs-toggle="tooltip" data-bs-title="Default tooltip"></div>
                `
            }
        }
    }
}


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
        check_filled()
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
        check_filled()
    }
}
// function to close modal
let closeModal =(btn, modal_div)=>{
    const button = document.querySelector(`#${btn}`)
    const modal = document.querySelector(`#${modal_div}`)
    button.onclick =()=>{
        // check if modal is visible to DOM
        if(!modal.classList.contains('collapse')){
            // means the modal is opened so close it
            modal.classList.toggle('collapse')
        }
    }
}
// ---------------------------------------------------------
// Begining functions for adding, showing and deleting Data
const addEvent = (event,index) =>{
    // check if event doesn't exist
    let add_modal_footer = document.querySelector('.add_modal_footer')
    let my_modal_footer = document.querySelector('.my_modal_footer')
    let my_modal = document.querySelector('.my_modal')
    let add_event_btn = add_modal_footer.querySelector(':scope #add_event_btn') 
    let add_modal = document.querySelector('#add_modal')
    let event_title = document.querySelector('#event_title')
    let event_desc = document.querySelector('#event_desc')
    // get the last element Index of the saved data
    let last_saved = myEvents.length -1
    if(index == 'undefined'){
        // meaning we push new object and create new index
        let res = confirm('you are about to create a new entry! Continue?')
        if(res){
            // first clear the modal_body then add the form for collecting data
            my_modal.classList.toggle('collapse')
            add_modal.classList.toggle('collapse')
            add_event_btn.onclick = () =>{
                // push the message to the object
                myEvents.push({
                    id:last_saved+1,
                    event_name:[`${event_title.value}`],
                    desc:[`${event_desc.value}`],
                    date:`${event}`
                })
                console.log(myEvents)
                add_modal.classList.toggle('collapse')
                check_filled()
            }
        }
    }else{
        // meaning there is an existing data - add to the existing data
        let res = confirm('You are about to add to the following data')
        if(res){
            // first clear the modal_body then add the form for collecting data
            my_modal.classList.toggle('collapse')
            add_modal.classList.toggle('collapse')
            add_event_btn.onclick = () => {
                // push the message to the object
                for (const x of myEvents) {
                    if (x.id == index){
                        // this is where we will be inputing the data
                        let desc = x.desc
                        let titl = x.event_name
                        titl.push(event_title.value)
                        desc.push(event_desc.value)
                        console.log(myEvents)
                        add_modal.classList.toggle('collapse')
                        check_filled()
                    }
                }
            }
        }
    }
}
const deleteEvent = (index)=>{

    
}
const showEvents = (result_count,selectedDate,data_index) =>{
    let my_modal_body = document.querySelector('.my_modal_body')
    let my_modal_footer = document.querySelector('.my_modal_footer')
    let my_modal = document.querySelector('.my_modal')
    let add_event_btn = my_modal_footer.querySelector(':scope #add_event_btn') 
    my_modal.classList.remove('collapse')
    my_modal_body.textContent = ""
    // steps to show events 
    // step 1 is to make the modal visible
    // step 2 add message to the my_modal_body content
    add_event_btn.setAttribute('onclick',`addEvent('${selectedDate}','${data_index}')`)
    if (result_count >= 1){
        // meaning there is data so show the data available in a table
        my_modal_body.textContent =''
        let date_para = document.createElement('span')
        let data_table = document.createElement('table')
        data_table.classList.add('table')
        data_table.classList.add('border-0')
        let table_tr = document.createElement('tr')
        let table_td = document.createElement('td')
        let table_thead = document.createElement('thead')
        let table_tbody = document.createElement('tbody')
        let head_content = `
            <td><input type='checkbox'></td>
            <td>Event Name </td>
            <td>Description</td>
            <td>Actions</td>
        `
        
        table_thead.append(table_tr)
        table_tr.innerHTML = head_content
        date_para.textContent = selectedDate
        date_para.style.backgroundColor = 'grey'
        date_para.style.color = "white"
        date_para.style.padding= "5px"
        date_para.style.borderRadius = '5px'
        data_table.classList.add('border-0')
        my_modal_body.append(date_para)
        my_modal_body.append(data_table)
        data_table.append(table_thead)
        data_table.append(table_tbody)
        // test 
        // console.log(data_index)
        let sel_event = (myEvents[data_index])
        for (let index = 0; index < sel_event.event_name.length; index++) {
            let table_body_tr = document.createElement('tr')
            table_body_tr.innerHTML += 
            `
            <td><input type='checkbox'></td>
            <td>${sel_event.event_name[index]}</td>
            <td>${sel_event.desc[index]}</td>
            <td><button class ="btn btn-danger"><i class="fi fi-rr-trash"></i></button></td>
            `
            table_tbody.append(table_body_tr)   
        }

    }else{
        // no data available so display no events and make the continue button serve as next modal to add event
        // show the date and the alert message
        let date_para = document.createElement('span')
        let error_h2 = document.createElement('h3')
        let info_para = document.createElement('p')
        info_para.classList.add('mb-0')
        info_para.innerHTML +="You currently do not have any Events Saved for This date. To add an event to this date, click <b>Add Event</b> below."
        error_h2.textContent = 'No Saved Event'
        error_h2.classList.add(['text-danger','fs-2','mt-3'])
        date_para.textContent = selectedDate
        date_para.classList.add(['text-white','fs-3','date_para'])
        date_para.style.backgroundColor = 'grey'
        date_para.style.color = "white"
        date_para.style.padding= "5px"
        date_para.style.borderRadius = '5px'
        my_modal_body.append(date_para)
        my_modal_body.append(error_h2)
        my_modal_body.append(info_para)
    }
}
// End of events management 
// -------------------------------------------------------
// -------------------------------------------
// show dates with event
check_filled()