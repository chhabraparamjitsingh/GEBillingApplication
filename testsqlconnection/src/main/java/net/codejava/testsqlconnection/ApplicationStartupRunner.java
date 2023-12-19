package net.codejava.testsqlconnection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Component;


@Component
public class ApplicationStartupRunner implements CommandLineRunner{

    @Autowired 
    private CustomerRecordOperations customerRecordOperation;


    public static void executeApplicationStratupRunner (String[] args) {
        //Calling the Run Function right when the program is initialized.
        SpringApplication.run(ApplicationStartupRunner.class, args);
	}
    
    /* This function will be called as soon as the program is initialized. 
    It will create a file which would include all the records from the CustomerRecord Table so that search can be done easily using the UI.
    */
    @Override
    public void run(String... args) throws Exception {
        customerRecordOperation.PopulateCustomerRecordFile();
    }
}
