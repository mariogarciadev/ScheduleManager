<?php require APPROOT . '/views/inc/header.php'; ?>
<main>
    <div class="intro">
      <h3>More Info</h3>
      <p>More things to know about this piece of work.</p>

      <div style="color: blue">
        <label>Change Mood</label>
        <input id="toggleMood" type="range" min="1" max="2" step="1" value="1">
      </div>
    </div>

    <div class="agenda">
      <h2>About This Web App</h2>
        <div style="padding: 20px">
          <p>Thanks for coming to ScheduleManager by Mario. This app was made to offer some usefulness in keeping track of errands. One thing was kept in mind in the making of this:<p><br>

          <p><span style="text-decoration: underline">Javascript, pure framework-free Javascript</span>, to showcase its capabilities like <span style="text-decoration: underline">manipulating the DOM</span> and it's elements to produce an interactive practical application.</p><br>

          <p>Although a good deal of wisdom in HTML & CSS took to completely finish this in 2 weeks without any help from Bootstrap, this website would be my best representation of using basic HTML, CSS, and JS to make a wonderful expressive web app.</p><br>

          <p>Initially, this was constructed in Laravel to more quickly write the PHP code to save tasks to a server database, but I figure this is portfolio-ready regardless if it only saves them to LocalStorage. Rather than move all this in a made-from-scratch PHP MVC framework, I'll keep it in Laravel. More server-side features will be added continously.</p>
    </div>
    
    <script src="<?php echo URLROOT; ?>/js/main.js"></script>
    <script src="<?php echo URLROOT; ?>/js/moodChanger.js"></script>
    </main>
<?php require APPROOT . '/views/inc/footer.php'; ?>