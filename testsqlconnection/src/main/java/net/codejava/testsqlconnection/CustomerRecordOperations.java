package net.codejava.testsqlconnection;

import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;

@Component
public class CustomerRecordOperations {
	
	@Autowired
    private JdbcTemplate jdbcTemplate;
	String fileDirectory = "D:/GERecords/";
	String AllCustomerRecordFileName = "AllCustomerRecord.json";
	String SingleCustomerRecordFileName = "SingleCustomerRecord.json";

	public void PopulateCustomerRecordFile(){

		String filePath = fileDirectory + AllCustomerRecordFileName;
		String sqlQuery = "select * from CustomerRecord";
		
		List<CustomerRecord> cust = jdbcTemplate.query(sqlQuery, 
				BeanPropertyRowMapper.newInstance(CustomerRecord.class));
		
		FileWriter filewriter;
		try {
			filewriter = new FileWriter(filePath);
			Gson gson = new Gson();
			gson.toJson(cust, filewriter);
			filewriter.flush(); //This is important for the values to be written to the file
			filewriter.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

	public String FetchCustomerRecord(String customerKey)   {
		String filePath = fileDirectory + SingleCustomerRecordFileName;
    	String sqlQuery = "select top 1 * from CustomerRecord where CustomerKey = " + customerKey;
		System.out.println(sqlQuery);

		List<CustomerRecord> cust = jdbcTemplate.query(sqlQuery, 
				BeanPropertyRowMapper.newInstance(CustomerRecord.class));
		
		cust.forEach(System.out :: println);
		FileWriter filewriter;
		try {
			filewriter = new FileWriter(filePath);
			Gson gson = new Gson();
			gson.toJson(cust, filewriter);
			filewriter.flush(); //This is important for the values to be written to the file
			filewriter.close();
        } catch (IOException e) {
			e.printStackTrace();
		}
		return "Record Fetched for" + customerKey;  
    }

	public void InsertNewCustomerRecord()	{
		System.out.println("InsertNewCustoemr Function has been called successfully");
	} 
}