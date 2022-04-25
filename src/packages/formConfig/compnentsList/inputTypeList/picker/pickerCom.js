import {datePickerObj,timePickerObj} from './pickerObj'
console.log(timePickerObj)
export default [
    datePickerObj({
        id:'datetime_picker_'+Date.now()
    }),
    timePickerObj({
        id:'time_picker_'+Date.now()
    })
]