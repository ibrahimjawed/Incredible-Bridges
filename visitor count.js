var visitorCount = 10; {
    function updateVisitorCount() {
        var visitorCountElement = document.getElementById("visitor-count");
        visitorCountElement.textContent = visitorCount.toLocaleString();
        visitorCount++;
    }
    updateVisitorCount();
    setInterval(updateVisitorCount, 3000)// Update every 3 seconds
}
// search bar js //
document.getElementById("searchForm").addEventListener("submit", function () {
    event.preventDefault(); // Prevent the default form submission

    // Get the search query from the input field
    var searchQuery = document.getElementById("searchInput").value.trim();

    // Perform the search action (replace this with your search logic)
    if (searchQuery !== "") {
        // Redirect to search results page with the search query as a URL parameter
        alert("Thank you for search !");
    }
});
//  INDEX NAVBAR SEARCH SCRIPT //

document.addEventListener("DOMContentLoaded", function () {
    // Get the search form element
    var searchForm = document.getElementById("Sh");

    // Add event listener for form submission
    searchForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the search query from the input field
        var searchQuery = searchForm.querySelector("input[type=search]").value;

        // Perform the search operation (replace this with your actual search functionality)
        alert("Performing search for: " + searchQuery);

        // Clear the search input field after submitting the form
        searchForm.querySelector("input[type=search]").value = "";
    });
});

//  CLOSE //

