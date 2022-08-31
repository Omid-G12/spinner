const spinner = () => {
  let timer = 100;
  let list = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
  for (let item of list) {
    setTimeout(() => {
      process.stdout.write(item);
    }, timer);
    timer += 200;
  }
};
spinner();
