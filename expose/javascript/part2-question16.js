let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for(let car in statistics){
    if( (statistics[car]%2==1) || car.substring(0,1)=='r'){
        console.log(statistics[car]);
    }
}