<?php require APPROOT . '/views/inc/header.php'; ?>
  <main>
        <div class="intro">
          <h3>Intro To Agenda</h3>
          <p>This agenda application has various functionalities. Click to discover, and among them are making a list of tasks & deleting as well. The converter and search pages have authorization for registered users only, but it's deactivated for sake of showing all.</p>
          <br>
          <a id="aboutLink" href="/about" style="display: inline; background: transparent">More Info</a>
          <br>
          <div style="color: blue">
              <label>Change Mood</label>
              <input id="toggleMood" type="range" min="1" max="2" step="1" value="1">
          </div>
        </div>

        <div class="agenda">
          <h2>Agenda Tracker <span id="counter">Tasks Recorded: <p id="countNum"></p></span></h2>

          <ul id="agendaList">

          </ul>
          <form id="taskForm">
            <div id="addWindow">
              <label for="task">Task:</label>
                <input type="text" id="taskName"><br>
              <label for="task">Type:</label>
              <button id="submitButt" type="submit">Add</button>
            </div>
          </form>
        </div>

        <button id="addButt">New Task</button>

        <div id="helpBox"></div>

        <script src="<?php echo URLROOT; ?>/js/main.js"></script>
        <script src="<?php echo URLROOT; ?>/js/moodChanger.js"></script>
</main>
<?php require APPROOT . '/views/inc/footer.php'; ?>
