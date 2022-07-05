const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark')

  /**
   * The Window.getComputedStyle() method returns an object containing the values
   * of all CSS properties of an element, after applying active stylesheets and
   * resolving any basic computation those values may contain.
   */

  //convert string to integer, then constantly add 180 degrees
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})
