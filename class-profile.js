const className = " Web Development javascript class";
const studentName = "shamaeil mohammadi";
const isOnline = true;

const studentCities = [
  "Kabul",
  "Herat",
  "Mazar-i-Sharif",
  "kandahar",
  "Khost",
  "Badakhshan",
];

let studentCount = 25;

const onlineStatusType = typeof isOnline;

console.log(
  `Verification: The data type of 'isOnline' is: ${onlineStatusType}`,
);
console.log("--------------------------------------------------\n");

console.log(`--- Class Profile Summary ---
Class Name:       ${className}
Student:       ${studentName}
Total Students:   ${studentCount}
Student Origins:  The students come from ${studentCities[0]}, ${studentCities[1]}, and ${studentCities[2]} and ${studentCities[3]}.
-----------------------------`);
