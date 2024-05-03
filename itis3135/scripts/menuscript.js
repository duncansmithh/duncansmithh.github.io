document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("components/header.json")
        .then(response => response.json())
        .then(data => {
            const header = document.querySelector('header'); // Select header element

            // Create h1 element
            const h1 = document.createElement("h1");
            h1.textContent = data.h1;

            // Create nav element for menu
            const menu = document.createElement("nav");
            data.menu.forEach((item, index) => {
                // Create menu item link element
                const menuItem = document.createElement("a");
                menuItem.textContent = item.name;
                menuItem.href = item.url;
                // Append menu item to the container
                menu.appendChild(menuItem);

                // Add separator "|" if it's not the last item
                if (index < data.menu.length - 1) {
                    const separator = document.createTextNode(" | ");
                    menu.appendChild(separator);
                }
            });

            // Create menu/submenu separator element
            const menuBreak = document.createElement("hr");
            menuBreak.classList.add("separator");

            // Create nav element for sub-menu
            const subMenu = document.createElement("nav");
            data.submenu.forEach((item, index) => {
                // Create menu item link element
                const subMenuItem = document.createElement("a");
                subMenuItem.textContent = item.name;
                subMenuItem.href = item.url;
                // Append menu item to the container
                subMenu.appendChild(subMenuItem);

                // Add separator "|" if it's not the last item
                if (index < data.submenu.length - 1) {
                    const separator = document.createTextNode(" | ");
                    subMenu.appendChild(separator);
                }
            });

            // Append elements to header
            header.appendChild(h1);
            header.appendChild(menu);
            header.appendChild(menuBreak);
            header.appendChild(subMenu);
        })
        .catch(error => console.error("Error fetching header:", error));
    
    // Fetch JSON data
    fetch("components/footer.json")
        .then(response => response.json())
        .then(data => {
            const footer = document.querySelector('footer'); // Select footer element

            // Create slogan (wrapped in <p><em></em></p>)
            const p = document.createElement("p");
            const em = document.createElement("em");
            em.textContent = data.slogan;
            p.appendChild(em);

            // Create nav element for footer menu
            const nav = document.createElement("nav");
            data.navLinks.forEach((item, index) => {
                // Create link element
                const link = document.createElement("a");
                link.textContent = item.name;
                link.href = item.url;
                
                // Append link to nav
                nav.appendChild(link);
    
                // Add separator "|" if it's not the last item
                if (index < data.navLinks.length - 1) {
                    const separator = document.createTextNode(" | ");
                    nav.appendChild(separator);
                }
            });

            // Create paragraph and anchor elements for firm name and certifications
            const p2 = document.createElement("p");
            const firm = document.createElement("a");
            firm.textContent = data.firm.name;
            firm.href = data.firm.website;
            const rwd = document.createElement("a");
            rwd.textContent = data.certifications[0].name;
            rwd.href = data.certifications[0].url;
            const js = document.createElement("a");
            js.textContent = data.certifications[1].name;
            js.href = data.certifications[1].url;

            p2.appendChild(document.createTextNode("Designed by "));
            p2.appendChild(firm);
            p2.appendChild(document.createTextNode(" ©2024, Certified in "));
            p2.appendChild(rwd);
            p2.appendChild(document.createTextNode(" and "));
            p2.appendChild(js);

            // Create validation anchors
            const htmlVal = createValidationAnchor(data.validation.html, validateHTML);
            const cssVal = createValidationAnchor(data.validation.css, validateCSS);
            const wcagVal = createValidationAnchor(data.validation.wcag, validateAIM);

            // Create toggle button to toggle CSS styles
            const toggleDiv = document.createElement("div");
            toggleDiv.classList.add("toggle-css");
            const toggleButton = document.createElement("button");
            toggleButton.textContent = "Toggle CSS";
            toggleButton.addEventListener("click", toggleCSS);

            toggleDiv.appendChild(toggleButton);

            // Append elements to footer
            footer.appendChild(p);
            footer.appendChild(nav);
            footer.appendChild(p2);
            footer.appendChild(htmlVal);
            footer.appendChild(cssVal);
            footer.appendChild(wcagVal);
            footer.appendChild(toggleDiv);
        })
        .catch(error => console.error("Error fetching footer:", error));
});

// Helper function to create validator anchor elements
function createValidationAnchor(data, onClickFunction) {
    const a = document.createElement("a");
    a.style = "text-decoration: none;";
    a.addEventListener("click", onClickFunction);

    const img = document.createElement("img");
    img.style = "border: 0; width: 88px; height: 31px"
    img.src = data.src;
    img.alt = data.alt;
    a.appendChild(img);

    return a;
}

// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://wave.webaim.org/report#/${currentURL}`, "_blank");
}

// Function to toggle CSS styles
function toggleCSS() {
    // Select all <link> elements with rel="stylesheet"
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    
    // Toggle the disabled attribute for each <link> element
    styleSheets.forEach(function(link) {
        link.disabled = !link.disabled;
    });
}