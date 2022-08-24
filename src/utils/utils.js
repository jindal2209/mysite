export function closeMenu() {
  document.getElementById('check').click();
}

export function closeMenuKey(event) {
  if (event.keyCode === 27)
    document.getElementById('check').click();
}

export function changeScrollWidth(event) {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("scrollPos").style.width = scrolled + "%";
}
