function validateExpression() {
  const expressionType = document.getElementById("expressionType").value;
  const expression = document.getElementById("expression").value;
  const validationResult = document.getElementById("validationResult");

  let isValid = false;

  switch (expressionType) {
      case "email":
          isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              expression
          );
          break;
      case "phone_number":
          isValid = /^\d{10}$/.test(expression);
          break;
      case "post_code":
          isValid = /^\d{4}$/.test(expression);
          break;
  }

  if (isValid) {
      validationResult.textContent = "Expression is valid!";
  } else {
      validationResult.textContent = "Expression is invalid!";
  }

  return false;
}
