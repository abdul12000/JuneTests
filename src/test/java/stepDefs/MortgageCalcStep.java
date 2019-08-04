package stepDefs;

import base.BaseUtil;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pages.MortgageCalcHomePage;

public class MortgageCalcStep extends BaseUtil {

    private BaseUtil base;
    public MortgageCalcStep(BaseUtil base){this.base = base;}

    @Given("^i am on the mortgage calculator page$")
    public void iAmOnTheMortgageCalculatorPage() {
        base.driver.navigate().to("https://www.mortgagecalculator.org/");

    }

    @When("^i enter loan amount as (\\d+)$")
    public void iEnterLoanAmountAs(String amount) {
        MortgageCalcHomePage mortgageCalcHomePage = new MortgageCalcHomePage(base.driver);
        mortgageCalcHomePage.enterLoanAmount(amount);

    }

    @Then("^done$")
    public void done() {
        System.out.println("All done");
    }
}
