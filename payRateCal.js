function payRateCalculate() {
  let rate = 0;
  if (yearOfStudy == 1) rate = 55;
  else if (yearOfStudy == 2) rate = 65;
  else if (yearOfStudy == 3) rate = 75;
  else if (yearOfStudy == 4) rate = 85;
return rate * workDays * 8;
}