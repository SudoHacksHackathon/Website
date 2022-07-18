const generateRandomText = () => {
  const CHARS = '!"$%&/=@~`#';
  const NUM_CHARS = 10000; // cut off using overflow: hidden

  let result = "";
  for (let i = 0; i < NUM_CHARS; i++) {
    result += CHARS.charAt(Math.floor(CHARS.length * Math.random()));
  }

  return result;
};

export default generateRandomText;
