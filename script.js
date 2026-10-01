function openPage(pageName) {

    // Find all sections with the class "page"
    const pages = document.getElementsByClassName("page");

    // Hide every page
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // Show the selected page
    document.getElementById(pageName).style.display = "block";

    // Scroll back to the top
    window.scrollTo(0, 0);
}