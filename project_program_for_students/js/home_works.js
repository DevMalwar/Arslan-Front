// dz-1

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailSpan = document.querySelector('#gmail_result');

const validateEmail = (email) => {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email);
};

const updateValidationResult = (isValid) => {
  gmailSpan.innerHTML = isValid ? 'OK' : 'Not OK';
  gmailSpan.style.color = isValid ? 'green' : 'red';
};

gmailButton.addEventListener('click', () => {
  const email = gmailInput.value;
  const isValidEmail = validateEmail(email);
  updateValidationResult(isValidEmail);
});

// dz-1 part 2

document.addEventListener('DOMContentLoaded', () => {
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');
    let currentPosition = 0;
    let isMoving = false;
  
    const moveBlock = () => {
      const maxPosition = parentBlock.offsetWidth - childBlock.offsetWidth;
  
      if (!isMoving && currentPosition < maxPosition) {
        isMoving = true;
        currentPosition += 5;
        childBlock.style.left = currentPosition + 'px';
        setTimeout(() => {
          isMoving = false;
          moveBlock();
        }, 10);
      }
    };
  
    moveBlock();
  });
  