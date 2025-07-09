const codeDisplay = document.getElementById('code-display');
const pageDropdown = document.getElementById('page-dropdown');

const longCodePage1 = `
background
`;

const longCodePage2 = `
plot
`;

const longCodePage3 = `
character
`;
  
const longCodePage4 = `
thought

`;

const longCodePage5 = `
diction

`;

const longCodePage6 = `
melody

`;

const longCodePage7 = `
spectacle

`;


pageDropdown.addEventListener('change', () => {
  switch (pageDropdown.value) {
    case 'page1':
      codeDisplay.textContent = longCodePage1;
      break;
    case 'page2':
      codeDisplay.textContent = longCodePage2;
      break;
    case 'page3':
      codeDisplay.textContent = longCodePage3;
      break;
    case 'page4':
      codeDisplay.textContent = longCodePage4;
      break;
    case 'page5':
      codeDisplay.textContent = longCodePage5;
      break;
    case 'page6':
      codeDisplay.textContent = longCodePage6;
      break;
    case 'page7':
      codeDisplay.textContent = longCodePage7;
      break;
    
    default:
      codeDisplay.textContent = longCodePage1;
  }
});

