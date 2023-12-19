package net.codejava.testsqlconnection.controllers;

import org.springframework.web.bind.annotation.RestController;

import net.codejava.testsqlconnection.CustomerRecordOperations;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class UrlTestController {

        @Autowired
        private CustomerRecordOperations CRO;

     
   
    @GetMapping("/getcust")
    public String callFetchCustomerRecordFunction(@RequestParam String customerKey) {
        
        System.out.println("The customer Key is " + customerKey);
        String status = CRO.FetchCustomerRecord(customerKey);
        return status;
    }
    


    @GetMapping("/newcust")
    public String callInsertNewCustomerRecordFunction () {

        CRO.InsertNewCustomerRecord();
        CRO.PopulateCustomerRecordFile();
        return "New Customer Has been added successfully";
    }
}
