function sumLesson4(a) {
  return function (b) {
    return a + b;
  };
}

console.log('sum:', sumLesson4(5)(2));

test('Function must return 7', () => {
  expect(sumLesson4(5)(2)).toBe(7);
});

document.body.innerHTML = `
    <p id="text1">Text 1</p>
<p id="text2">Text 2</p>
<p id="text3">Text 3</p>`;

describe('check color', () => {
  const element1 = document.getElementById('text1');
  const element2 = document.getElementById('text2');
  const element3 = document.getElementById('text3');
  const elementsArr = [element1, element2, element3];
  test('change color', async () => {
    for (let i = 0; i < elementsArr.length; i += 1) {
      elementsArr[i].click();
      const expectColor = elementsArr[i].style.color;
      expect(expectColor).toBe('magenta');
    }
  });
});
