export function list_to_tree(list) {
  var map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent_id) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parent_id]]?.children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function convertDateTime(myDate) {
  // date to dd/mm/yyyy
  let date = new Date(myDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const output = day + "/" + month + "/" + year;
  return output;
}

function listToTree(list) {
  let map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i] = { ...list[i], children: [] }; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent_id) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parent_id]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

export function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}

export function removeEmptyFields(data) {
  Object.keys(data).forEach((key) => {
    if (data[key] === "" || data[key] == null) {
      delete data[key];
    }
  });
}

export function RandomAnalytics(min = 0, max = 50) {
  // var today = new Date();
  // return today.getHours();
  let a = Date.now();
  return (
    Math.floor((a - 1632795995020) / 10000000) +
    Math.floor(Math.random() * (max - min)) +
    min
  );
  // return Math.floor(Math.random() * (max - min)) + min;
}

export function formatCurrencyVND(price) {
  return price?.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
}
