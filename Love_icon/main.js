let con = document.getElementById("container");
let love = con.querySelector("i");

con.addEventListener("dblclick", function () {
  love.style.transform = " translate(-50%,-50%) scale(1)";
  love.style.opacity = 0.8;
  love.style.color = "red";

  setTimeout(function () {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    love.style.transform = " translate(-50%,-50%) scale(0)";
    love.style.color = "red";
  }, 1000);
});
