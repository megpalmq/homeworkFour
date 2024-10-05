const homePage = `
<div class="home">
    <div class="hero">
        <h1>Home</h1>
    </div>
    <div class="center">
        <div class="super">
            <h3>You seem sleepy😴</h3>
            <div class="fred"></div>
        </div>
        <div class="text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quis id! Labore perferendis illo fugit nostrum consectetur cupiditate aut expedita vel error, suscipit iure. Repudiandae, sunt. Obcaecati quasi delectus quaerat!</p>
            <p>Dolore ratione, in sit provident molestiae deserunt veritatis molestias praesentium nisi tempora distinctio quia sed ab? Debitis molestias odio sapiente velit maxime eligendi dolores voluptatum eum! Nihil quod recusandae officiis?</p>
            <p>Illo odio iste autem iure dolores enim est libero id quia incidunt officiis sunt nam, nemo vel in fugit veritatis repellat quae placeat! Architecto eligendi id nulla, consequuntur fugit nihil.</p>
            <p>Maiores numquam quas dolor amet quisquam ea ab. Magni corrupti consequuntur ea! Itaque eaque debitis quidem, aspernatur, quas distinctio officia exercitationem molestias aut ullam ex modi, adipisci nulla numquam? Enim.</p>
        </div>
    </div>
</div>`;

const aboutPage = `
<div class="about">
    <div class="hero2">
        <h1>About</h1>
    </div>
    <div class="about-section1">
        <h2>Take a minute to relax?</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quis id! Labore perferendis illo fugit nostrum consectetur cupiditate aut expedita vel error, suscipit iure. Repudiandae, sunt. Obcaecati quasi delectus quaerat!</p>
        <p>Dolore ratione, in sit provident molestiae deserunt veritatis molestias praesentium nisi tempora distinctio quia sed ab? Debitis molestias odio sapiente velit maxime eligendi dolores voluptatum eum! Nihil quod recusandae officiis?</p>
        <p>Illo odio iste autem iure dolores enim est libero id quia incidunt officiis sunt nam, nemo vel in fugit veritatis repellat quae placeat! Architecto eligendi id nulla, consequuntur fugit nihil.</p>
        <p>Illo odio iste autem iure dolores enim est libero id quia incidunt officiis sunt nam, nemo vel in fugit veritatis repellat quae placeat! Architecto eligendi id nulla, consequuntur fugit nihil.</p>
    </div>
</div>`;

function changePage(pageName) {
    const pageVarName = pageName + "Page";
    $("#app").html(eval(pageVarName));
}

// initial load
changePage('home');

$(document).ready(function() {
    // hide the modals initially
    $("#feedbackModal").hide();
    $("#thankYouModal").hide(); // hide thank you modal initially

    $("#loginBtn").click(function() {
        $("#feedbackModal").show(); // show the login modal
    });

    $(".close-modal").click(function() {
        $("#feedbackModal").hide(); // hide the feedback modal
        $("#thankYouModal").hide(); // hide the thank you modal
    });

    $(".login").click(function() {
        $("#loginStatus").show(); // show the login status message
        $("#feedbackModal").hide(); // hide feedback modal after saving
        $("#loginBtn").hide(); // hide the login button after login
        $("#thankYouModal").show(); // show thank you modal
    });

    //event listeners for the navigation links
    $("#home").click(function(event) {
        event.preventDefault(); 
        changePage('home'); 
    });

    $("#about").click(function(event) {
        event.preventDefault(); 
        changePage('about'); 
    });

    // Close modal when clicking outside of it
    $(window).on('click', function(event) {
        if ($(event.target).is('.modal-background')) {
            $("#feedbackModal").hide();
            $("#thankYouModal").hide(); // Hide the thank you modal when clicking outside
        }
    });
});