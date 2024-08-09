const DELUX_RATE = 5000;
const SUITE_RATE = 8000;
const AC_COST = 1000;
const LOCKER_COST = 500;
const EXTRA_PERSON_CHARGE = 1000;

function calculateCost() {
    const roomType = document.getElementById('roomType').value;
    const totalDays = parseFloat(document.getElementById('totalDays').value);
    const totalPersons = parseFloat(document.getElementById('totalPersons').value);
    const advanceAmount = parseFloat(document.getElementById('advanceAmount').value);
    const hasAC = document.getElementById('ac').checked;
    const hasLocker = document.getElementById('locker').checked;

    if (!roomType || isNaN(totalDays) || isNaN(totalPersons) || isNaN(advanceAmount)) {
        alert('Please fill all the required fields.');
        return;
    }

    let roomCost = 0;
    let amenitiesCost = 0;

    if (roomType === 'delux') {
        roomCost = DELUX_RATE;
    } else if (roomType === 'suite') {
        roomCost = SUITE_RATE;
    }

    amenitiesCost = (hasAC ? AC_COST : 0) + (hasLocker ? LOCKER_COST : 0);

    let totalCost = roomCost * totalDays + amenitiesCost;
    if (totalPersons > 2) {
        totalCost += (totalPersons - 2) * EXTRA_PERSON_CHARGE * totalDays;
    }

    let balance = totalCost - advanceAmount;

    document.getElementById('totalCost').value = totalCost.toFixed(2);
    document.getElementById('balance').value = balance.toFixed(2);
}