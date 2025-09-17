# Rooster

Rooster is a tool allows you to easily view your KU Leuven schedule in your calendar, with all information presented clearly. Check it out at [rooster.gbgk.be](https://rooster.gbgk.be).

## Adding programmes

Rooster is able to display data for any programme, but for extended data (like teachers), the programme data must be added to the `src/programmes` folder.

### Automatically (ask Claude to add it)

[Create an issue](https://github.com/gbougakov/rooster/issues/new?template=request-programme-addition.md) mentioning the link to the programme page, and don't forget to tag `@claude`. Claude will automatically look up the page for the programme, extract all required data and make a pull request.

### Doing it manually (or if you are Claude)

To add a programme to the list of available programmes, you can add a new file to the `src/programmes` directory. You can generate the data required for the file by running the following script in DevTools on the programme page in Onderwijsaanbod:

```javascript
// DevTools script to extract course data from KU Leuven course table
const extractCourseData = () => {
  // Select all module rows
  const moduleRows = document.querySelectorAll('tr.module-row');

  // Array to store extracted data
  const courses = [];

  moduleRows.forEach(row => {
    try {
      // Extract ECTS code (from stage-code cell or from the row ID)
      let ectsCode = '';
      const codeCell = row.querySelector('.stage-code');
      if (codeCell) {
        ectsCode = codeCell.textContent.trim();
      } else if (row.id && row.id.startsWith('module')) {
        // Fallback: extract from row ID (remove 'module' prefix)
        ectsCode = row.id.replace('module', '');
      }

      // Extract subject name from the link in module-title cell
      let subjectName = '';
      const titleLink = row.querySelector('.module-title a');
      if (titleLink) {
        subjectName = titleLink.textContent.trim();
      }

      // Extract teachers from the instructors section
      const teachers = [];

      // Try to find instructors in the print version div first (more complete)
      let instructorLinks = row.querySelectorAll('.instructors a');

      // If not found, try the web version
      if (instructorLinks.length === 0) {
        instructorLinks = row.querySelectorAll('.instructors-container a');
      }

      instructorLinks.forEach(link => {
        const teacherName = link.textContent.trim();
        if (teacherName) {
          teachers.push(teacherName);
        }
      });

      // Create course object
      const courseData = {
        ectsCode: ectsCode,
        subjectName: subjectName,
        teachers: teachers
      };

      // Only add if we have at least the code and subject name
      if (ectsCode && subjectName) {
        courses.push(courseData);
      }

    } catch (error) {
      console.error('Error processing row:', error, row);
    }
  });

  return courses;
};

// Run the extraction
const courseData = extractCourseData();

// Display results
console.log('Extracted course data:');
console.log(JSON.stringify(courseData, null, 2));

// Also display as a table for easy viewing
console.table(courseData);

// Return the data
courseData;
```

The extracted data includes course codes, subject names, and teacher names (as simple strings). This data is publicly available on the KU Leuven website, so there should be no privacy concerns. However, if you are a teacher and you do not want your name to be displayed, please let me know at [rooster@gbgk.me](mailto:rooster@gbgk.me) and I will remove it.

## Handling Special Lecture Keywords

Rooster now includes a feature to handle special lecture keywords like 'practical lecture' and 'tutorial'. When these keywords are found in the event summary, the corresponding text is added in parentheses to the subject name.

### Example

If the event is a practical lecture on microeconomics, the name will be modified as follows:

- Original: "Microeconomics for Business practical lecture"
- Modified: "Microeconomics for Business (Practice)"

Similarly, for tutorials:

- Original: "Microeconomics for Business tutorial"
- Modified: "Microeconomics for Business (Tutorial)"
