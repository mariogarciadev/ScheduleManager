<?php require APPROOT . '/views/inc/header.php'; ?>
<main>
<div class="intro">
        <h3>Time Converter</h3>
        <p>Helps to convert & display time units (hours, days, minutes, seconds). Can really help you be organized valuable time during a busy day, at work or for a special event when you want to micromanage.</p>
        <div style="color: blue">
            <label>Change Mood</label>
            <input id="toggleMood" type="range" min="1" max="2" step="1" value="1">
        </div>
    </div>

    <div class="agenda">
        <h2>Time Converter</h2>

        <div id="convWindow">
            <label for="conv">Additional Conversions</label>
            <select id="convSelect">
                <option value="time">Time</option>
                <option value="weight">Weight</option>
                <option value="length">Length</option>
                <option value="volume">Volume</option>
            </select>
        </div>

        <div id="conDiv">
            <div id="converter">
                <label id="convLabel" for="time">Time (hours):</label>
                <input type="number" id="timeInput" placeholder="Enter hours...">
            </div>
            <div id="daysDisplay">
                <div id="daysLabel">Days: </div> <div id="daysOutput">0</div><br>
            </div>
            <div id="minsDisplay">
                <p id="minsLabel">Mins: </p><span id="minsOutput">0</span><br>
            </div>
            <div id="secsDisplay">
                <p id="secsLabel">Secs: </p><span id="secsOutput">0</span><div>
            </div>
        </div>
    </div>

    <script src="<?php echo URLROOT; ?>/js/converter.js"></script>
    <script src="<?php echo URLROOT; ?>/js/moodChanger.js"></script>
</main>
<?php require APPROOT . '/views/inc/footer.php'; ?>
