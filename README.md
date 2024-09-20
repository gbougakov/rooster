# Rooster

Rooster is a tool allows you to easily view your KU Leuven schedule in your calendar, with all information presented clearly. Check it out at [rooster.gbgk.be](https://rooster.gbgk.be).

## Adding programmes

Rooster is able to display data for any programme, but for extended data (like teachers), the programme data must be added to the `src/programmes` folder.

To add a programme to the list of available programmes, you can add a new file to the `src/programmes` directory. You can generate the data required for the file by running the following script in DevTools on the programme page in Onderwijsaanbod:

```javascript
// Get all rows with the class 'opo_row'
let rows = document.querySelectorAll('tr.opo_row');

// Array to store the results
let data = [];

// Loop through each row
rows.forEach(row => {
    // Extract the ECTS code
    let ectsCode = row.querySelector('td.code') ? row.querySelector('td.code').textContent.trim() : '';

    // Extract the subject name
    let subjectElement = row.querySelector('td.opleidingsonderdeel a');
    let subjectName = subjectElement ? subjectElement.textContent.trim() : '';

    // Extract the list of teachers
    let teacherElements = row.querySelectorAll('td.docent div.print_only li a');
    let teachers = Array.from(teacherElements).map(teacher => ({
        name: teacher.textContent.trim().replace(".", ". "),
        profile: teacher.getAttribute('href')
    }));

    // Create an object for the current row
    let courseData = {
        ectsCode: ectsCode,
        subjectName: subjectName,
        teachers: teachers
    };

    // Add the object to the array
    data.push(courseData);
});

// Print the extracted data as JSON
console.log(JSON.stringify(data, null, 2));
```

This data is publically available on the KU Leuven website, so there should be no privacy concerns. However, if you are a teacher and you do not want your name to be displayed, please let me know at [rooster@gbgk.me](mailto:rooster@gbgk.me) and I will remove it
