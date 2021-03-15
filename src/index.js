module.exports = function toReadable (number) {
   let ten = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let twenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let hundredths = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';

  let str = '';
  if (number === 0) {
      return ten[0];
  }
  if ( number >= 100) {
      str += ten[String(number).slice(-3, -2)] + ' ' + hundred + ' ';
  }
  let num = number % 100;
  if ( num ) {
    if (num >= 10 && num < 20) {
        str += twenty[String(num).slice(-1)] + ' ';
    } else {
        if (num >= 20) {
            str += hundredths[String(num).slice(-2, -1)] + ' ';
        }
        if (String(num).slice(-1) != 0) {
            str += ten[String(num).slice(-1)];
        }
    }
  }
  return str.trim();
}
