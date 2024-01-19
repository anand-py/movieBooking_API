const  generateUpcomingDates = (numberOfDays) =>{
    const today = new Date();
    const upcomingDates = [];
  
    for (let i = 0; i < numberOfDays; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      upcomingDates.push(date.toISOString().slice(0, 10)); // Format as YYYY-MM-DD
    }
  
    return upcomingDates;
  }

module.exports = generateUpcomingDates

