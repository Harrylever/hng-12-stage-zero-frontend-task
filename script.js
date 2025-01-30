function updateUTCTime() {
  const utcElement = document.querySelector(".utc-time")
  const now = new Date()
  utcElement.textContent = `Current UTC Time: ${now.toUTCString()}`
}
updateUTCTime()
