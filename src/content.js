// Function to remove the specified element
function removeElement() {
  var elementToRemove = document.querySelector('.swal-overlay.swal-overlay--show-modal,.Toastify');
  if (elementToRemove) {
    elementToRemove.remove();
  }
}

// MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(removeElement);

// Configuration of the observer
var config = { childList: true, subtree: true };

// Start observing the target node for configured mutations
observer.observe(document.body, config);

// Remove the element on page load
removeElement();
