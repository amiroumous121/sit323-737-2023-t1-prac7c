document.addEventListener("DOMContentLoaded", () => {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const output = document.getElementById("output");

  const addBtn = document.getElementById("add");
  const subtractBtn = document.getElementById("subtract");
  const multiplyBtn = document.getElementById("multiply");
  const divideBtn = document.getElementById("divide");

  const serverAddress = "http://127.0.0.1:3041"; // Use service name instead of localhost

  addBtn.addEventListener("click", async () => {
    const result = await performOperation(
      serverAddress,
      "add",
      num1.value,
      num2.value
    );
    output.textContent = result;
  });

  subtractBtn.addEventListener("click", async () => {
    const result = await performOperation(
      serverAddress,
      "subtract",
      num1.value,
      num2.value
    );
    output.textContent = result;
  });

  multiplyBtn.addEventListener("click", async () => {
    const result = await performOperation(
      serverAddress,
      "multiply",
      num1.value,
      num2.value
    );
    output.textContent = result;
  });

  divideBtn.addEventListener("click", async () => {
    const result = await performOperation(
      serverAddress,
      "divide",
      num1.value,
      num2.value
    );
    output.textContent = result;
  });

  async function performOperation(serverAddress, operation, num1, num2) {
    try {
      const response = await fetch(
        `${serverAddress}/${operation}?num1=${num1}&num2=${num2}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.text();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Error";
    }
  }
});
