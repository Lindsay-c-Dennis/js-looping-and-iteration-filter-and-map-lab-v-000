// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  bigMoneyDrivers = driversWithRevenueOver(drivers, revenue);
  return bigMoneyDrivers.map(function(driver) {return driver.name});
}

function exactMatch(drivers, obj) {
  return drivers.filter(driver => driver.includes(obj));
}

function exactMatchToList() {
  
}