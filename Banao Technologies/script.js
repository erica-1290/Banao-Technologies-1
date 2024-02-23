// Function to open login popup
function openLoginPopup() {
    var popupWindow = window.open('', 'loginPopup', 'width=400,height=400');
    var popupContent = 

    popupWindow.document.write(popupContent);
  }
  
  // Event listeners for clicking and cursor change
  document.getElementById('createAccountImage').addEventListener('click', openLoginPopup);
  document.getElementById('createAccountImage').style.cursor = 'pointer'; // Change cursor style
  
  document.getElementById('dropdownIcon').addEventListener('click', openLoginPopup);
  document.getElementById('dropdownIcon').style.cursor = 'pointer'; // Change cursor style