// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.licenses === 'IMB') {
    data.licenses = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } 
  if (data.licenses === 'MIT') {
    data.licenses = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (data.licenses === 'Eclipse') {
    data.licenses = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
  if (data.licenses === 'Mozilla') {
    data.licenses = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (data.licenses === 'Perl') {
    data.licenses = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  }

  return `
  # ${data.name}

  ## Table of Contents
  1. [Contact Me](#Questions)
  2. [Languages Used in App](#languages)
  3. [Installation](#installation)
  4. [Description of App](#description)
  5. [Contributors](#contributors)
  6. [Licenses](#Licenses)

  ## Description:
  ${data.description} 

  ## Languages Used in App
  ${data.languages.join(', ')}

  ## Licenses
  ${data.licenses.join(', ')}

  ## Instalation Instuctions: 
  ${data.installation}

  ## Contributors: 
  ${data.contributors}

  ##Questions:
  - [Link to Github Profile](${data.github})
  - [Please Contact My Email For Questions](${data.email})
`;
}

module.exports = generateMarkdown

