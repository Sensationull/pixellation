function toggleModal() {
  const modal = document.querySelector('.share-modal');
  if (modal.style.visibility === 'hidden' || modal.style.visibility === '') {
    modal.style.visibility = 'visible';
  } else {
    modal.style.visibility = 'hidden';
  }
  console.log(modal.style.visibility);
}

function circleListener() {
  const circle = document.querySelector('.circle');
  circle.addEventListener('mouseover', () => {
    toggleModal();
  })
  circle.addEventListener('mouseout', () => {
    toggleModal();
  })
}

circleListener()