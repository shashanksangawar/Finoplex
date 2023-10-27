// ----------Declaration----------
const icon = document.querySelector('.icon');
const clear = document.querySelector('.clear');
const search = document.querySelector('.navbar-search');
const search_text = document.querySelector('#Searched-Text');
const closeicon = document.querySelector('.close');

const API = document.getElementById('API');
const Calculator = document.getElementById('Calculator');
const Login = document.getElementById('Login');
const Register = document.getElementById('Register');
const menu_icon = document.getElementById('menu-icon');
const menu_group = document.getElementById('menu-group');
// const close = document.getElementById('close');


// ----------Search Icon----------
icon.onclick = function() 
{
  search.classList.toggle('active');

  // Toggle the display of suggestions
  const suggestionsDiv = document.querySelector(".suggestions");
  if (search.classList.contains('active')) 
  {
    suggestionsDiv.style.display = "block";
  }
  else 
  {
    suggestionsDiv.style.display = "none";
  }
}

// ----------Clear Button----------
clear.onclick= function()
{
  document.getElementById('Searched-Text').value = '';
  search.classList.toggle('active');

    // Toggle the display of suggestions
  const suggestionsDiv = document.querySelector(".suggestions");
  suggestionsDiv.style.display = "none";


}

// ----------Suggestions Logic----------
document.addEventListener("DOMContentLoaded", function () 
{
  const searchInput = document.getElementById("Searched-Text");
  const suggestionsDiv = document.querySelector(".suggestions");

  // Load JSON data
  let recommendations = [];

  // Fetching Json Data
  fetch("./js/suggestions/suggestion.json")
    .then((response) => response.json())
    .then((data) => {
      recommendations = data;
    })
    .catch((error) => {
      console.error("Error loading recommendations:", error);
    });

  // Add an input event listener to the search input
  searchInput.addEventListener("input", function () {
    const userInput = searchInput.value.toLowerCase();
    const matchingRecommendations = recommendations.filter((item) =>
      item.toLowerCase().includes(userInput)
    );

    // Clear previous recommendations
    suggestionsDiv.innerHTML = "";
    suggestionsDiv.addEventListener("click", function (event) {
      if (event.target.tagName === "DIV") {
          const clickedSuggestion = event.target.textContent;
  
          // Define a mapping of suggestions to URLs (adjust as needed)
          const suggestionToUrl = {
              "Fixed Deposits": "https://shashanksangawar.github.io",
              "Recurring Deposits": "https://bharatincometax.in/components/recurring-deposits",
              "NSC": "https://bharatincometax.in/components/fixed-deposits",
              "KVP": "https://bharatincometax.in/components/fixed-deposits",
              "Term Deposit": "https://bharatincometax.in/components/fixed-deposits",
              "RITS": "https://bharatincometax.in/components/fixed-deposits",
              "INVITS": "https://bharatincometax.in/components/fixed-deposits",
              "Stock": "https://bharatincometax.in/components/fixed-deposits",
              // For Other Websites
              "a": "https://bharatincometax.in/components/a",
              "b": "https://bharatincometax.in/components/b",
              "c": "https://bharatincometax.in/components/c",
              "d": "https://bharatincometax.in/components/d",

          };
  
          // Check if the clicked suggestion has a corresponding URL
          if (suggestionToUrl[clickedSuggestion]) {
              // Redirect to the corresponding URL
              window.location.href = suggestionToUrl[clickedSuggestion];
          }
      }
      });
    // Display matching recommendations
    matchingRecommendations.forEach((recommendation) => {
      const suggestion = document.createElement("div");
      suggestion.textContent = recommendation;
      suggestionsDiv.appendChild(suggestion);
    });
  });
});

// ========== Redirect using button ==========

// ----------API Redirect----------
API.addEventListener("click",function()
{
  window.location.href = "https://bharatincometax.in/API";
});

// ----------Calculators Redirect----------
Calculator.addEventListener("click",function()
{
  window.location.href = "https://bharatincometax.in/API";
});

// ----------Sign Up Redirect----------
Login.addEventListener("click",function()
{
  window.location.href = "index.html";
});

// ----------Sign In Redirect----------
Register.addEventListener("click",function()
{
  window.location.href = "index.html";
});

// ========== Menu Button ==========
menu_icon.addEventListener("click",function(){
  menu_group.style.display = "block";
});


// ========== Close Button ==========
closeicon.onclick= function()
{
  menu_group.style.display = "none";
}