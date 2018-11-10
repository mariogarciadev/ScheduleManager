<?php require APPROOT . '/views/inc/header.php'; ?>
<main>
<div class="intro">
            <h3>Intro To The Search Window</h3>
            <p>This search window rapidly looks for a task saved in the agenda when the agenda becomes very large.</p>
            <div style="color: blue">
                <label>Change Mood</label>
                <input id="toggleMood" type="range" min="1" max="2" step="1" value="1">
            </div>
        </div>

        <div class="agenda">
            <h2>Search Tasks in Schedule</h2>
            <div id="searchWindow">
                <input type="text" id="searchInput" placeholder="Search task...">

                <ul id="tasks">

                </ul>
            </div>
        </div>
    <script src="<?php echo URLROOT; ?>/js/search.js"></script>
    <script src="<?php echo URLROOT; ?>/js/moodChanger.js"></script>
</main>
<?php require APPROOT . '/views/inc/footer.php'; ?>

