(function () {

    console.log("Running Script");

    const ok = prompt("Did you run this on purpose? Enter 'yes' to confirm!");

    if (ok !== "yes") {
        console.log("Aborted");
        return;
    }

    console.log("Confirmed execution");
    document.cookie.split("; ").forEach(cookie => {
  const [name, ...rest] = cookie.split("=");
  const value = rest.join("=");
  console.log(name, ">", decodeURIComponent(value));
});
})();

