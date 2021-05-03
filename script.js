const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 250;
    //increments it by the target increment e.g 12000 /250  every 1 second
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      //doesnt go over the target amount
      counter.innerText = target;
    }
  };

  updateCounter();
});
