document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById("reviewForm");
  const emailInput = document.getElementById("emailInput");
  const commentInput = document.getElementById("commentInput");
  const reviewDisplay = document.getElementById("reviewDisplay");

  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const comment = commentInput.value;

    if (!isValidEmail(email)) {
      alert("Пожалуйста, введите корректный email.");
      return;
    }

    const review = document.createElement("div");
    review.innerHTML = `<p style="font-size: 20px"><strong>${email}</strong></p><p style="font-size: 18px"> ${comment}</p><br><br><br>`;
    reviewDisplay.appendChild(review);

    // Сбросить форму
    reviewForm.reset();
  });

  function isValidEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
});





document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length == 0){
    alert("Kindly Enter Task Name!!!!")
  }

  else{
    document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
      current_tasks[i].onclick = function(){
        this.parentNode.remove();
      }
    }
  }
}








