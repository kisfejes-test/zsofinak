for (let i = 0; i < 8; i++) {
  let row = '';
  for (let j = 0; j < 8; j++) {
    if (i % 2 === 0 && j % 2 !== 0) {
      row += 'XX';
    } else if (i % 2 !== 0 && j % 2 === 0) {
      row += 'XX';
    } else {
      row += '  ';
    }
  }
  console.log(row);
  console.log(row);
}
