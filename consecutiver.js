function consecutiver(number = 0, masterString) {
  if (masterString == undefined || masterString == null || masterString == "") {
    masterString =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else {
    masterString = [...new Set(masterString)];
  }

  var toBase = masterString.length;

  toChars = [...masterString];

  if (typeof number != "object") {
    number = number.toString();
  }

  var base10Num = Math.min(number);

  var string = "";
  var looping = true;
  var stringLen = 0;
  var stringVal = 0;

  while (looping) {
    stringLen++;
    console.log(base10Num, "base10Num");
    // console.log(toBase, "toBase");
    // console.log(stringLen, "stringLen");

    if (Math.pow(toBase, stringLen) > base10Num) {
      //  console.log('zzzx')
      //   stringLen++;
      break;
    } else if (Math.pow(toBase, stringLen) > base10Num) {
      stringLen++;
    
      break;
    } else if (Math.pow(toBase, stringLen) == base10Num) {
    //  stringLen --;
            stringLen++;
   //  break;
    }
  }
  for (var position = stringLen; position > 0; position--) {
    for (var placeVal = 0; placeVal < toBase + 1; placeVal++) {
      if (
        placeVal * Math.pow(toBase, position - 1) >
        base10Num - stringVal
        //||
        // (placeVal == 0 && base10Num - stringVal == 0)
      ) {
        //    if (!(placeVal == 0 && base10Num - stringVal == 0))

        {
          //    console.log(stringVal, 'string val 1')
          stringVal =
            stringVal + (placeVal - 1) * Math.pow(toBase, position - 1);
          //    console.log(stringVal, 'string val 2')
          string = string + toChars[placeVal - 1];
        }

        //  else
        //    {
        //      string = string + toChars[0];
        //    }
        break;
      }
    }
  }
  if (stringVal == base10Num) {
    return string;
  } else {
    console.log("Consecutiver failed");
    return string;
  }
}

module.exports = { consecutiver };
