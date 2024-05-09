/*
Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

timeMath('01:24:31', '-', '02:31:41') === '22:52:50'
*/

function timeMath(time1, op, time2) {
    const [h1, m1, s1] = time1.split(':').map(Number);
    const [h2, m2, s2] = time2.split(':').map(Number);
    
    let resultHours, resultMinutes, resultSeconds;
    
    switch (op) {
      case '+':
        resultSeconds = (s1 + s2) % 60;
        resultMinutes = ((m1 + m2) + Math.floor((s1 + s2) / 60)) % 60;
        resultHours = (h1 + h2 + Math.floor((m1 + m2 + Math.floor((s1 + s2) / 60)) / 60)) % 24;
        break;
      case '-':
        let totalSeconds1 = h1 * 3600 + m1 * 60 + s1;
        let totalSeconds2 = h2 * 3600 + m2 * 60 + s2;
        let diffSeconds = (totalSeconds1 - totalSeconds2 + 86400) % 86400; // Ensure positive result
        resultHours = Math.floor(diffSeconds / 3600);
        resultMinutes = Math.floor((diffSeconds % 3600) / 60);
        resultSeconds = diffSeconds % 60;
        break;
      default:
        throw new Error('Invalid operation');
    }
    
    return `${String(resultHours).padStart(2, '0')}:${String(resultMinutes).padStart(2, '0')}:${String(resultSeconds).padStart(2, '0')}`;
  }
  