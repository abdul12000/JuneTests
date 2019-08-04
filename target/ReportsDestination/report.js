$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mortgageCalc.feature");
formatter.feature({
  "line": 1,
  "name": "calculating Loan",
  "description": "",
  "id": "calculating-loan",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5912562400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "mortgage",
  "description": "",
  "id": "calculating-loan;mortgage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@AutomatedScenario"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "i am on the mortgage calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i enter loan amount as 50",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "done",
  "keyword": "Then "
});
formatter.match({
  "location": "MortgageCalcStep.iAmOnTheMortgageCalculatorPage()"
});
formatter.result({
  "duration": 4040976100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 23
    }
  ],
  "location": "MortgageCalcStep.iEnterLoanAmountAs(String)"
});
formatter.result({
  "duration": 182086300,
  "status": "passed"
});
formatter.match({
  "location": "MortgageCalcStep.done()"
});
formatter.result({
  "duration": 206200,
  "status": "passed"
});
formatter.after({
  "duration": 5782184700,
  "status": "passed"
});
});