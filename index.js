// solução do teste
const string = "#@185;gfd546NNK9A&%C2";
var outString = string.replace(/[a-z`~!@#$%^&*()_|+\-=?;:'",.<>]/gi, "");
const filterNumber = outString.split("").filter((el) => el % 2 === 0);
console.log(filterNumber.sort((a, b) => a - b));

const validateSpecialChar = (char) => {
  return !char.match(/[`~!@#$%^&*()_|+\-=?;:'",.<>]/gi);
};

const validateChar = (char) => {
  return !char.match(/[a-z]/gi);
};

const removeOdd = (number) => {
  return number % 2 === 0;
};

const orderNumber = (a, b) => a - b;

const strinArray = string
  .split("")
  .filter(validateSpecialChar)
  .filter(validateChar)
  .filter(removeOdd);

console.log(strinArray.sort(orderNumber));

// 2

/*
 * Se a ideia for somnet mudar o s valores dentro do array
 */

const data = {
  items: [
    {
      value: 1
    },
    {
      value: 1
    }
  ]
};

const changeData = ({ items }) => {
  const dataChange = items.map((item) => {
    return {
      value: (item.value = 2)
    };
  });

  return {
    items: dataChange
  };
};

const n = changeData(data);
console.log(n, data);
