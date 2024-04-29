package com.adactin_BaseClass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import freemarker.core.ReturnInstruction.Return;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Base_Class {
	static WebDriver driver;
	
	public static WebDriver Browser_Launch(String Launch) {
		if (Launch.equalsIgnoreCase("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			
			
		}
		else if (Launch.equalsIgnoreCase("firefox")) {
			WebDriverManager.firefoxdriver().setup();
			driver=new FirefoxDriver();
			
			
		}
		driver.manage().window().maximize();
		return driver;
		
	}
	
	
	
	
	
		
	}


