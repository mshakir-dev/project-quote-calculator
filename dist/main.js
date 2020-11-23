let display = document.getElementById('display');
display.classList.add('hide');

let errorMessage = document.querySelector('.errorMessage');

// We will add display div once we will calculate the final Price. How much we should charge ...


const calculate = document.getElementById('calculate');
// We will apply event listener to calculate button, so every time when user click on the button it will display the final message;

calculate.addEventListener('click', quoteAWebsite);

function quoteAWebsite() {
  let clientName = document.getElementById('clientName').value;
  let hourCost = document.getElementById('hourCost').value;
  let hourEstimation = document.getElementById('hourEstimation').value;
  let project = document.getElementById('project').value;
  let displayMessage = document.getElementById('displayMessage')


  hourCost = parseFloat(hourCost);
  hourEstimation = parseFloat(hourEstimation);
  project = parseFloat(project)

  let baseRate = (hourCost * hourEstimation).toFixed(2);

  let calculateBaseRate = parseFloat(baseRate);

  let projectTypeBaseRate = (calculateBaseRate * project).toFixed(2);
  let calculateProjectBaseRate = parseFloat(projectTypeBaseRate);
 

  let finalQuote = (calculateBaseRate + calculateProjectBaseRate).toFixed(2);

  display.classList.add('show');
  displayMessage.innerHTML = `You Should Charge $${finalQuote} to your Client : ${clientName} `;
}