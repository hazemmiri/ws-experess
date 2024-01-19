let date = new Date();

let currentHour = date.getHours();
let currentDay = date.getDay();

const logger = (req,res,next)=>{
    if (currentHour >8 && currentHour<17 && currentDay >0 && 
        currentDay < 6) {
            next();
    }else{
        res.send("<img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/495766138.jpg?k=d63ebcba254164d9607fdad6d1ce40dd87c2716e2ee6838bc39d8e735086b30a&o=&hp=1'")
    }
}
module.exports = logger