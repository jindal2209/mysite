export function closeMenu() {
  document.getElementById('check').click();
}

export function closeMenuKey(event) {
  if (event.keyCode === 27)
    document.getElementById('check').click();
}

export function changeScrollWidth(event) {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("scrollPos").style.width = scrolled + "%";
}

export function getFormattedDateMonth(date) {
  const d = new Date()
  if (d.getFullYear() === date.getFullYear() && d.getMonth() === date.getMonth()) {
    return 'Present'
  }

  const month = date.toLocaleString('en-US', {
    month: 'long',
  });
  return month + ' ' + date.getFullYear()
}

export function getFullDuration(total_duration) {
  const start_date = total_duration.start_date
  const end_date = total_duration.end_date
  return calcDate(start_date, end_date).result
}

function calcDate(date1, date2) {
  /*
  * calcDate() : Calculates the difference between two dates
  * @date1 : "First Date in the format MM-DD-YYYY"
  * @date2 : "Second Date in the format MM-DD-YYYY"
  * return : Array
  */

  //new date instance
  const dt_date1 = new Date(date1);
  const dt_date2 = new Date(date2);

  //Get the Timestamp
  const date1_time_stamp = dt_date1.getTime();
  const date2_time_stamp = dt_date2.getTime();

  let calc;

  //Check which timestamp is greater
  if (date1_time_stamp > date2_time_stamp) {
    calc = new Date(date1_time_stamp - date2_time_stamp);
  } else {
    calc = new Date(date2_time_stamp - date1_time_stamp);
  }
  //Retrieve the date, month and year
  const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
  //Convert to an array and store
  const calcFormat = calcFormatTmp.split("-");
  //Subtract each member of our array from the default date
  // const days_passed = Number(Math.abs(calcFormat[0]) - 1);
  const months_passed = Number(Math.abs(calcFormat[1]));
  const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

  //Set up custom text
  const yrsTxt = ["year", "years"];
  const mnthsTxt = ["month", "months"];
  // const daysTxt = ["day", "days"];

  //Convert to days and sum together
  // const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
  // const total_secs = total_days * 24 * 60 * 60;
  // const total_mins = total_days * 24 * 60;
  // const total_hours = total_days * 24;
  // const total_weeks = (total_days >= 7) ? total_days / 7 : 0;

  //display result with custom text
  const result = ((years_passed === 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
    years_passed + ' ' + yrsTxt[1] + ' ' : '') +
    ((months_passed === 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
      months_passed + ' ' + mnthsTxt[1] + ' ' : '')

  //return the result
  return {
    // "total_days": Math.round(total_days),
    // "total_weeks": Math.round(total_weeks),
    // "total_hours": Math.round(total_hours),
    // "total_minutes": Math.round(total_mins),
    // "total_seconds": Math.round(total_secs),
    "result": result.trim()
  }
}