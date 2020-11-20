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