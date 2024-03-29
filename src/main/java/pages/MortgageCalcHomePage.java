package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MortgageCalcHomePage  extends BasePage{
    public MortgageCalcHomePage(WebDriver driver){super (driver);}
    @FindBy(id="loanamt")
    private WebElement loanAmount;

    public void enterLoanAmount(String lAmount){
        loanAmount.sendKeys(lAmount);
    }
}
