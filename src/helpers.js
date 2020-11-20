export const windDirection=(deg)=>{
    if(deg>=0 && deg<45){
        return "North"
    }
    if(deg>45 && deg<90){
        return "East"
    }
    if(deg>90 && deg<135){
        return "Southeast"
    }
    if(deg>135 && deg<180){
        return "South"
    }
    if(deg>180 && deg<225){
        return "SouthWestern"
    }
    if(deg>225 && deg<270){
        return "West"
    }
    if(deg>270 && deg<360){
        return "Northwest"
    }
}
//KISS or swich xD !

// moments maybe? '! is nahh xD (problem solved)
export const DayWeek=(day)=>{
    // two cases of +1 and +2 
    // if(day===7){
    //     return "Sunday"
    // }
    // if(day===8){
    //     return "Monday"
    // }
    
    //all 
    if(day>6){
        day=day-7
    }
    switch(day){
        case(0):
        return "Sunday"
        case(1):
        return "Monday"
        case(2):
        return "Tuesday"
        case(3):
        return "Wednesday"
        case(4):
        return "Thursday"
        case(5):
        return "Friday"
        case(6):
        return "Saturday"
        default:
        return "NewDAy"
    }
}